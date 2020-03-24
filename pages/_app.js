import App from 'next/app';

import 'antd/dist/antd.css';

import Layout from '../components/Layout/Layout'

const Container = ({ Component, pageProps }) => {
    // console.log(Component); // withRouteWrapper
    console.log('pageProps is', pageProps);

    // pageProps渲染完成 此处定制pageProps
    pageProps.age = 20;
    // 注入appProps之前
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}


// custom App 添加getInitialProps会禁用静态资源优化（所有的getInitial失效），下面的代码可以解决这个问题
Container.getInitialProps = async (appContext) => {
    // if(App.getInitialProps){}
    const appProps = await App.getInitialProps(appContext); // 获取包括一些关键信息，例如pageProps

    return {
        ...appProps,
    };
}


export default Container;
