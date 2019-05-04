import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

let enhancer = applyMiddleware(thunk);

const store = createStore(combineReducers(reducers), {}, enhancer);

export default store;