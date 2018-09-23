import { AsyncStorage } from 'react-native'
import { put, call, takeLatest } from 'redux-saga/effects';
import { USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGIN_FAIL } from '../../actions/index';
import { setUserAsyncStorage } from '../../utils/utils';

export function* watcherUserLoggingIn() {
    yield takeLatest(USER_LOGGING_IN, workerUserLoggingIn)
}


export function* workerUserLoggingIn(actionObject) {
    const { password, userName } = actionObject;

    let isLoggedIn = false;
    let isLoading = false;

    const url = 'https://that-dads-logins.herokuapp.com/api/users';
    let userId = yield call(AsyncStorage.getItem, 'userId');
    let email = yield call(AsyncStorage.getItem, 'email');
    let likes = yield call(AsyncStorage.getItem, 'likes');
    let dislikes = yield call(AsyncStorage.getItem, 'dislikes');
    let tagline = yield call(AsyncStorage.getItem, 'tagline');
    
    try {

        console.log('URL is: ',`${url}/${userId}`);
        yield fetch(`${url}/${userId}`)
            .then(res => res.json())
            .then(json => {

                console.log('json response: ', json);
                password === json.password ? isLoggedin = true : isLoggedIn = false;
                userName === json.userName ? isLoggedin = true : isLoggedIn = false;
                if (password !== json.password)  {
                    alert('WRONG PASSWORD');
                    return isLoggedIn = false;
                }
                if (userName !== json.userName)  {
                    alert('WRONG USERNAME');
                    return isLoggedIn = false;
                }
                return isLoggedIn = true;
            })
            .catch(err => console.log('pw match error: ', err))
    } catch (error) {
        console.log('workerUserLoggingIn error: ', error);
    }
    isLoggedIn ? yield put({ type: USER_LOGGED_IN, email, userName, password, userId, likes, dislikes, tagline }) : yield put({ type: USER_LOGIN_FAIL });
}
