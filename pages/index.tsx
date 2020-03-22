import Link from 'next/link';
import { Button } from 'antd';
import Router from 'next/router';
import { Fragment } from 'react';
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

    function goToHome() {
        Router.push({
            pathname: '/home',
            query: {
                id: 2
            }
        }, '/home/2');
    }

    return (
        <Fragment>
            <Link href='/home?id=10' as='/home/10'>
                <Button>你好</Button>
            </Link>
            <Button onClick={goToHome}>goTo Home</Button>
        </Fragment>
    )
}



export default Index;