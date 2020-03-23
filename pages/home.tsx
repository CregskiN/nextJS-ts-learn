import React, { Fragment } from 'react';
import { Button } from 'antd';
import { withRouter, Router, NextRouter } from 'next/router';
import { NextComponentType } from 'next';

interface HomeInitialProps {
    name: string
}

interface HomeProps extends HomeInitialProps {
    router: NextRouter;
    // url: Router; // 随着App废弃，这个也没了
}

const Home: NextComponentType<any, HomeInitialProps, HomeProps> = (props) => {

    console.log('Home render ... ');
    console.log('Home props is ', props);
    console.log('name is ', props.name);

    return (
        <Fragment>
            <Button>{props.router.query.id}</Button>
            <div>{props.name}</div>
        </Fragment>
    )
}

// custom 的 App 会屏蔽子组件的getInitialProps
Home.getInitialProps = (p) => {
    // console.log('ho',p,',me');

    return {
        name: 'CregskiN'
    }
}

export default withRouter(Home);