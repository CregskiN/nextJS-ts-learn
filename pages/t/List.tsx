import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextComponentType, NextPageContext } from 'next';
import { NextRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Button } from 'antd';

const Board = dynamic(import(/* webpackChunkName: "asyncComponent_Board_listPage" */'../../components/Board/Board'));



interface ListInitialProps {
    // name?: string;
    // time?: string;
}

interface ListProps extends ListInitialProps {
    router: NextRouter;
    name?: string;
    time?: string;
}

interface ListProps {
    count: number;
}




const List: NextComponentType<any, ListInitialProps, ListProps> = (props) => {
    const dispatch = useDispatch();
    const state = useSelector<any, ListProps>(state => { console.log(`selector执行了。这里获取的name${props.name}`); return state; });
    const {
        count
    } = state;


    const handleAdd = () => {
        console.log('Button ++ render');
        dispatch(dispatch => {
            setTimeout(() => {
                dispatch({ type: 'ADD' })
            }, 1000)
        })
        /* setTimeout(() => {
            return (dispatch) => (dispatch({ type: 'ADD' }))
        }, 1000)) */
    }


    const handleMinus = () => {
        console.log('Button -- render');
        dispatch({ type: 'MINUS' })

    }
    console.log('Page List render');
    console.log(props);

    return (
        <>
            <Head>
                <title>List Page</title>
            </Head>
            <Board content={count} />
            <Board content='这个模块外部数据始终不变' />
            <div>List Page</div>
            <div>{props.name}</div>
            <div>{props.time}</div>
            <div>{process.env.customKey}</div>
            <div>{`count值为 - ${count}`}</div>
            <Button onClick={handleAdd}>{`+1`}</Button>
            <Button onClick={handleMinus}>{`-1`}</Button>
            <style jsx>{`
                div {
                    color: blue;
                }
            `}</style>
        </>
    )
}

List.getInitialProps = async (ctx: NextPageContext) => {
    console.log('List - getInitialProps');

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