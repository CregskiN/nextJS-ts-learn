import { Fragment } from 'react';
import Router from 'next/router';
import { NextComponentType } from 'next';


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

    return (
        <Fragment>
            <div>Index Page</div>
        </Fragment>
    )
}



export default Index;