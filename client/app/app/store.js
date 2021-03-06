import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
    combineReducers(reducers),
    {},
    enhancer
);

export default store;
