import App from 'next/app';

import 'antd/dist/antd.css';

const Container = ({ Component, pageProps }) => {
    // console.log(Component); // withRouteWrapper
    console.log('pageProps is', pageProps);
    return <Component {...pageProps} />
}


// custom App 添加getInitialProps会禁用静态资源优化（所有的getInitial失效），下面的代码可以解决这个问题
Container.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext); // 获取pageProps

    // 此处定制pageProps
    appProps.pageProps.age = 20;
    console.log('appProps', appProps);

    return {
        ...appProps, // 释放appProps.pageProps
    };
}


export default Container;  // 目前问题：这种方法会让getInitialProps失效
