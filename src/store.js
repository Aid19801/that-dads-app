import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import reducers from './reducers/index';

import { watcherRegisterUser } from './containers/registration-page/sagas';
import { watcherGetLoginStatus } from './sagas';
import { watcherUserLoggingIn } from './containers/login-page/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        watcherRegisterUser(),
        watcherGetLoginStatus(),
        watcherUserLoggingIn(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;