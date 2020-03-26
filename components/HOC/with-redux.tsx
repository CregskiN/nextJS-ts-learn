import { Component } from 'react';
import { getClientStore, getServerStore } from '../../store/index';
import { NextComponentType } from 'next/dist/next-server/lib/utils';
import { NextRouter } from 'next/router';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialProps: any) {
    if (isServer) {
        return getServerStore(initialProps);
    }

    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = getClientStore(initialProps);
    }

    return window[__NEXT_REDUX_STORE__];
}

interface WithReduxAppProps {
    Component: NextComponentType;
    router: NextRouter;
    pageProps: any;
    initialReduxState: any;
}

export default (MyApp: any) => {
    // console.log('WithRedux receive', MyApp); // WithRedux用于_app.js，Comp获取的是app组件

    class WithReduxApp extends Component<WithReduxAppProps, any, any> {
        constructor(props: WithReduxAppProps) {
            super(props);
            (this as any).reduxStore = getOrCreateStore(props.initialReduxState);
        }

        render() {
            console.log('WithReduxApp - render');
            const { Component, pageProps, ...rest } = this.props;
            return <MyApp Component={Component} pageProps={pageProps} {...rest} reduxStore={(this as any).reduxStore} />
        }
    }

    (WithReduxApp as NextComponentType).getInitialProps = async (ctx) => {
        console.log('WithRedux - getInitialProps');

        let appProps = {};
        if (typeof MyApp.getInitialProps === 'function') {
            appProps = await MyApp.getInitialProps(ctx);
        }

        const reduxStore = getOrCreateStore({});

        return {
            ...appProps,
            initialReduxState: reduxStore.getState()
        }
    }

    return WithReduxApp;
}