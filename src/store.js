import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeLatest, all } from 'redux-saga/effects'
import { SUBMIT_USER, SUBMIT_USER_OK, SUBMIT_USER_FAIL } from './actions/index';
import reducers from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export function* watcherRegisterUser() {
    yield takeLatest(SUBMIT_USER, workerRegisterUser);
}

export function* workerRegisterUser(actionObject) {
    const { email, password, userName } = actionObject;

    try {
        const randomNumber = Math.floor(Math.random() * 100000 + 1);
        const dataBack = yield fetch('https://dads-logins.herokuapp.com/users', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: `${userName}_${randomNumber}`,
                email,
                userName,
                password,

            }),
            method: 'POST',
        }).then((res) => res);

        yield put({ type: SUBMIT_USER_OK, data: dataBack })
    } catch (error) {
        console.log('error: ', error);
        yield put({ type: SUBMIT_USER_FAIL, error });
    }
}

function* rootSaga() {
    yield all([
        watcherRegisterUser(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;