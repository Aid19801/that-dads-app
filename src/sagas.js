// // app container saga for user login
// import { takeLatest, put } from 'redux-saga/effects';
// import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actions';

// let isLoggedIn = false;

// export function* watcherGetLoginStatus() {
//     // yield takeLatest(CHECK_LOGIN_STATUS, workerGetLoginStatus);
//     return;
// }

// export function* workerGetLoginStatus() {
//     isLoggedIn ? yield put({ type: USER_LOGGED_IN }) : yield put({ type: USER_LOGGED_OUT });
// }