import React, { useReducer, useEffect } from 'react';
import { NextComponentType } from 'next';
import { NextRouter } from 'next/router';

const defaultState = {
    count: 0
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'add': {
            return state.count + 1;
        }
        case 'minus': {
            return state.count - 1;
        }
        default:
            return state;
    }
}


interface HooksProps {
    router: NextRouter;
}

const Hooks: NextComponentType<any, any, HooksProps> = (props) => {

    const [state, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
        dispatch({ type: 'add' });
    }, [])

    return (
        <>
            <div>component Hooks</div>
            <div>{JSON.stringify(state)}</div>
        </>
    )
}



export default Hooks;