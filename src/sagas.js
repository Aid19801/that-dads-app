// app container saga for user login
import { takeLatest, put } from 'redux-saga/effects';
import { CHECK_LOGIN_STATUS, USER_LOGGED_IN, USER_LOGGED_OUT } from './actions';


// get login status
export function* watcherGetLoginStatus() {
    yield takeLatest(CHECK_LOGIN_STATUS, workerGetLoginStatus);
}

export function* workerGetLoginStatus(actionObj) {
    console.log('userID passed in obj: ', actionObj.userId);
    actionObj.userId ? yield put({ type: USER_LOGGED_IN, id: actionObj.userId }) : yield put({ type: USER_LOGGED_OUT });
}
