import React from 'react';
import { Button } from 'antd';
import { withRouter, Router, NextRouter } from 'next/router';
import { NextComponentType } from 'next';

interface HomeInitialProps {
    name: string
}

interface HomeProps {
    router: NextRouter;
    url: Router;
}

const Home: NextComponentType<any, any, HomeProps> = (props) => {

    console.log('props render ... ');
    // console.log(props);

    return (
        <Button>{props.router.query.id/*  || (props.router.asPath.split('/'))[2] */}</Button>
    )
}


// Home.getInitialProps = () => {
//     return {
//         name: 'CregskiN'
//     }
// }

export default withRouter(Home);