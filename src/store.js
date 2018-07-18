import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeLatest, all, delay } from 'redux-saga/effects'
import { DATA_REQUESTED, DATA_RECEIVED, DATA_FAILED } from './actions/index';
import Data from './data/users.json';
import reducers from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export function* watcherGetData() {
    yield takeLatest(DATA_REQUESTED, workerGetData);
}

export function* workerGetData() {
    try {
        const dataBack = Data;
        yield put({ type: DATA_RECEIVED, data: dataBack })
    } catch (error) {
        yield put({ type: DATA_FAILED, error: error });
    }
}

function* rootSaga() {
    yield all([
        watcherGetData(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;