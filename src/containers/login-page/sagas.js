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
    
    // adding in long/lat for map page.
    let longitude = yield call(AsyncStorage.getItem, 'longitude');
    let latitude = yield call(AsyncStorage.getItem, 'latitude');

    try {

        yield fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('1. JSON: ', json.length);
                let specificUser = json.filter(each => each.userName === userName)[0];
                
                console.log('Does specificUser match password? ', specificUser.password == password);

                const loginStatus = password == specificUser.password ? isLoggedin = true : isLoggedIn = false;
                
                console.log('3. isLoggedIn? : ', isLoggedIn);
                console.log('3. loginStatus? : ', loginStatus);

                if (!loginStatus)  {
                    alert('Your password is wrong :(');
                    return isLoggedIn = false;
                }
                return isLoggedIn = true;
            })
            .catch(err => console.log('saga | password match error: ', err))
    } catch (error) {
        console.log('workerUserLoggingIn error: ', error);
    }
    isLoggedIn ? yield put({ type: USER_LOGGED_IN, email, userName, password, userId, likes, dislikes, tagline, longitude, latitude }) : yield put({ type: USER_LOGIN_FAIL });
}
