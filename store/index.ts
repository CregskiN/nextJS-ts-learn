import { createStore, applyMiddleware, compose } from 'redux';
import reducer, { defaultState } from './reducer';
import thunk from 'redux-thunk';


// 此处创建store的逻辑是server client公用的。有无


export function getServerStore(state: any) {
    const store = createStore(
        reducer,
        Object.assign({}, defaultState, state),
        applyMiddleware(thunk)
    );
    return store;
}


export function getClientStore(state: any) {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducer,
        Object.assign({}, defaultState, state),
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    return store;
}




