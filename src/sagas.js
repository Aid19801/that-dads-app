// app container saga for user login
import { takeLatest, put } from 'redux-saga/effects';
import { CHECK_LOGIN_STATUS, USER_LOGGED_IN, USER_LOGGED_OUT } from './actions';

export function* watcherGetLoginStatus() {
    yield takeLatest(CHECK_LOGIN_STATUS, workerGetLoginStatus);
}

export function* workerGetLoginStatus(obj) {
    obj.userId ? yield put({ type: USER_LOGGED_IN }) : yield put({ type: USER_LOGGED_OUT });
}