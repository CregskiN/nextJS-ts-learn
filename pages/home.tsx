import { Fragment } from 'react';
import { NextComponentType } from 'next';
import { withRouter, NextRouter } from 'next/router';
import Head from 'next/head';
import getConfig from 'next/config';

interface PublicInitialProps {
    age: number;
}

interface HomeInitialProps {
    name: string
}

interface HomeProps extends HomeInitialProps, PublicInitialProps {
    router: NextRouter;
    // url: Router; // custom App使用后禁用静态资源优化，这个就没了
}



const Home: NextComponentType<any, HomeInitialProps, HomeProps> = (props) => {
    const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();
    console.log(serverRuntimeConfig),
    console.log(publicRuntimeConfig);

    return (
        <Fragment>
            <Head>
                <title>Home Page</title>
            </Head>
            {'home page'}
            <div>{props.name}</div>
            <div>{process.env.customKey}</div>
        </Fragment>
    )
}

// custom 的 App 会屏蔽子组件的getInitialProps
Home.getInitialProps = () => {

    return {
        name: 'CregskiN'
    }
}

export default withRouter(Home);