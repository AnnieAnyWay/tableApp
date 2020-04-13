import {compose, createStore} from 'redux';
import appReducer from '../redux/reducers';

export function configureStore() {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(appReducer, composeEnhancer());
}

export const store = configureStore();