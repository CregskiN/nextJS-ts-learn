interface DefaultState {
    count: number;
}

export const defaultState = {
    count: 0
}
const ADD = 'ADD';
const MINUS = 'MINUS';

export default (state: DefaultState = defaultState, action: any) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case MINUS: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        default:
            return state;
    }

}