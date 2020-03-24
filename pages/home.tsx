import { Fragment } from 'react';

import { NextComponentType } from 'next';
import { withRouter, NextRouter } from 'next/router';
import Head from 'next/head';

interface PublicInitialProps {
    age: number;
}

interface HomeInitialProps {
    name: string
}

interface HomeProps extends HomeInitialProps, PublicInitialProps {
    router: NextRouter;
    // url: Router; // custom App兴起，这个就没了
}

const Home: NextComponentType<any, HomeInitialProps, HomeProps> = (props) => {

    return (
        <Fragment>
            <Head>
                <title>Home Page</title>
            </Head>
            {'home page'}
            <div>{props.name}</div>
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