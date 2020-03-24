import { NextComponentType } from 'next';
import { NextRouter } from 'next/router';
import Head from 'next/head';
import Board from '../../components/Board/Board';



interface LIstInitialProps { }

interface LIstProps extends LIstInitialProps {
    router: NextRouter;
}

const LIst: NextComponentType<any, LIstInitialProps, LIstProps> = (props) => {

    console.log('component LIst render..');

    return (
        <>
            <Head>
                <title>List Page</title>
            </Head>
            <Board />
            <div>List Page</div>
            <style jsx>{`
                div {
                    color: blue;
                }
            `}</style>
        </>
    )
}

// LIst.getInitialProps = () => {
//     return {

//     }
// }


export default LIst;