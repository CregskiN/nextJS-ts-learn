import { Fragment } from 'react';
import Router from 'next/router';
import { NextComponentType } from 'next';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const events = [
    'routeChangeStart',
    'routeChangeComplete',
    'routeChangeError',
    'beforeHistoryChange',
    'hashChangeStart',
    'hashChangeComplete',
];

function makeEvent(type: string) {
    return (...args: any) => {
        console.log(type, ...args);
    }
}

events.forEach((event: string) => {
    Router.events.on(event, makeEvent(event));
})


// NextComponentType接收的三种类型分别为： BaseContext(暂未用到)，InitialProps(从getInitialProps获取)，Props(从props获取)
const Index: NextComponentType<any, any, any> = () => {
    console.log(publicRuntimeConfig.OAUTH_URL)

    return (
        <Fragment>
            <div>Index Page</div>
            <a href={`${publicRuntimeConfig.OAUTH_URL}`}>登录</a>
        </Fragment>
    )
}



export default Index;