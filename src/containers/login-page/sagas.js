import { AsyncStorage } from 'react-native'
import { put, call, takeLatest } from 'redux-saga/effects';
import { USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGIN_FAIL } from '../../actions/index';

export function* watcherUserLoggingIn() {
    yield takeLatest(USER_LOGGING_IN, workerUserLoggingIn)
}

const url = 'https://that-dads-logins.herokuapp.com/api/users';
export function* workerUserLoggingIn(actionObject) {
    const { password, userName } = actionObject;

    let isLoggedIn = false;

    let uid = yield call(AsyncStorage.getItem, 'uid');

    try {
        yield fetch(`${url}/${uid}`)
            .then(res => res.json())
            .then(json => {
                console.log('json: ', json);
                password === json.password ? isLoggedin = true : isLoggedIn = false;
                userName === json.userName ? isLoggedin = true : isLoggedIn = false;
                if (password !== json.password)  {
                    alert('WRONG PASSWORD');
                    return isLoggedIn = false;
                }
                alert('logged in!')
                return isLoggedIn = true;
            })
            .catch(err => console.log('pw match error: ', err))
    } catch (error) {
        console.log('workerUserLoggingIn error: ', error);
    }
    console.log('isLoggedin: ', isLoggedIn);
    isLoggedIn ? yield put({ type: USER_LOGGED_IN, data: isLoggedIn }) : yield put({ type: USER_LOGIN_FAIL });
}
