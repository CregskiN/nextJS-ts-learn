import { ADD, MINUS } from './actions'

function addAction() {
    return {
        type: ADD
    }
}

function minusAction() {
    return {
        type: MINUS
    }
}

export const add = () => {
    return (dispatch) => {
        dispatch(addAction());
    }
}

export const minus = () => {
    return dispatch => {
        dispatch(minusAction());
    }
}

