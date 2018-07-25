import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import reducers from './reducers/index';

import { watcherRegisterUser } from './containers/registration/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        watcherRegisterUser(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;