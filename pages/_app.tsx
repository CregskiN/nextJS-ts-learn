import App from 'next/app';
import { Provider } from 'react-redux';
import { AppContextType, AppInitialProps } from 'next/dist/next-server/lib/utils';

import 'antd/dist/antd.css';
import Layout from '../components/Layout/Layout'
import WithRedux from '../components/HOC/with-redux'
import { Router } from 'next/router';

const MyApp = (props) => {
    const { Component, pageProps, reduxStore } = props;
    console.log('MyApp - render');

    // 注入appProps之前
    return (
        <>
            <Layout>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Layout>
        </>
    )
}


// custom App 添加getInitialProps会禁用静态资源优化（所有的getInitial失效），下面的代码可以解决这个问题
MyApp.getInitialProps = async (ctx: AppContextType<Router>) => {
    console.log('MyApp - getInitialProps');

    const appProps: AppInitialProps = await App.getInitialProps(ctx); // @TODO: 这里需要思考：有两种写法，此处为官网写法，这里使用的App.getInitialProps
    // @TODO: App内有两个getInitialProps、originalGetInitialProps，猜测：在page有getinitialProps时执行前者，没有则执行后者，
    // 不允许page.getInitialProps retuen为空是因为，按官方写法，在app render会注入执行page.getInitialProps后的 pageProps
    // console.log('appProps is ', appProps); // pageProps

    return {
        ...appProps,
        AppGetInitialProps: App.getInitialProps
    };
}


export default WithRedux(MyApp);
