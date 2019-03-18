import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './app/main';
import { initializeStore, AppState } from './store';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './effects';

// initializing store and saga middleware
const sagaMiddleware = createSagaMiddleware();
const store: Store = initializeStore(sagaMiddleware);
sagaMiddleware.run(mySaga);


const tsx = <Provider store={store}>
    <Main />
</Provider>

ReactDOM.render(tsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
