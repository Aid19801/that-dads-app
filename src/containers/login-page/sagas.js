import { AsyncStorage } from 'react-native'
import { put, call, takeLatest } from 'redux-saga/effects';
import { USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGIN_FAIL } from '../../actions/index';
import { updateAsyncWithUserInformation } from '../../utils/utils';

export function* watcherUserLoggingIn() {
    yield takeLatest(USER_LOGGING_IN, workerUserLoggingIn)
}


export function* workerUserLoggingIn(actionObject) {
    const { password, userName } = actionObject;
    const url = 'https://that-dads-logins.herokuapp.com/api/users';
    let isError = false;
    let isLoggedIn = false;
    let specificUser = {};

    yield fetch(url)
            .then(res => res.json())
            .then(json => {
                specificUser = json.filter(each => each.userName === userName)[0];
                console.log('matched User: ', specificUser);

                if (specificUser.password === password) {
                    console.log('unicorn | password has matched!!!!!');
                    isLoggedIn = true;

                    AsyncStorage.setItem('userName', userName);
                    AsyncStorage.setItem('password', password);
                    AsyncStorage.setItem('userId', specificUser._id);
                    console.log('unicorn | spec user id: ', specificUser._id);

                }

                if (json.length <= 1) {
                    isLoggedIn = false;
                }
            })
            .catch(err => {
                console.log('workerUserLoggingIn saga | login error / userName failed to match a user: ', err);
            })

    if (!isLoggedIn) {
        alert('Incorrect Password / Username');
        return;
    }
    
    updateAsyncWithUserInformation(specificUser);

    const { email, _id, likes, dislikes, tagline, longitude, latitude } = specificUser;

    isLoggedIn ? yield put({ type: USER_LOGGED_IN, email, userName, password, userId: _id, likes, dislikes, tagline, longitude, latitude }) : yield put({ type: USER_LOGIN_FAIL });
}
