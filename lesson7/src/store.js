import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {postsReducer} from './reducers/postsReducer';

const middleware = applyMiddleware(promise(), logger, thunk);

const reducers = combineReducers({
    posts: postsReducer
});

const store = createStore(reducers, middleware);
export default store;