import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';

import {App} from './containers/app';
import createReducer from './reducer';
import {rootEpic} from './epics';
import {createEpicMiddleware} from "redux-observable";

const DEBUG = true;

const reducer = createReducer();
const epicMiddleware = createEpicMiddleware();
const middleware = applyMiddleware(epicMiddleware);

let composeEnhancers, store;

if (DEBUG) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, undefined, composeEnhancers(middleware));
} else {
    composeEnhancers = compose;
    store = createStore(reducer, undefined, composeEnhancers(middleware));
}

epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);