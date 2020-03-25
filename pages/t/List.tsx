import { NextComponentType } from 'next';
import { NextRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';


const Board = dynamic(import(/* webpackChunkName: "asyncComponent_Board_listPage" */'../../components/Board/Board'));



interface LIstInitialProps {
    // name?: string;
    // time?: string;
}

interface LIstProps extends LIstInitialProps {
    router: NextRouter;
    name?: string;
    time?: string;
}

const List: NextComponentType<any, LIstInitialProps, LIstProps> = (props) => {

    console.log('component LIst render..');

    return (
        <>
            <Head>
                <title>List Page</title>
            </Head>
            <Board />
            <div>List Page</div>
            <div>{props.name}</div>
            <div>{props.time}</div>
            <div>{process.env.customKey}</div>
            <style jsx>{`
                div {
                    color: blue;
                }
            `}</style>
        </>
    )
}

List.getInitialProps = async () => {
    const moment = await import(/* webpackChunkName: "momentAsyncChunkInListPage" */'moment');
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'cregskiN',
                time: moment.default(Date.now() - 60 * 1000).fromNow()
            })
        }, 2000);
    })
    return await promise;
}


export default List;