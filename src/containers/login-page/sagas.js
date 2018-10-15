import { put, call, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { getUserAsyncStorage, setUserAsyncStorage, updateAsyncWithUserInformation } from '../../utils/utils';
import { CHECK_LOGIN_STATUS, USER_LOGGING_IN, USER_LOGGED_IN } from '../../actions/index';

export function* watcherCheckLoginStatus() {
    yield takeLatest(CHECK_LOGIN_STATUS, workerCheckLoginStatus);
}

export function* workerCheckLoginStatus() {
    console.log('Saga | workerCheckLoginStatus fired');

    const userDetails = yield call(getUserAsyncStorage);
    console.log('Saga | userDetails: ', userDetails);

    userDetails.password ? yield put({ type: 'USER_LOGGED_IN', userDetails }) : yield put({ type: 'USER_LOGGED_OUT' });
    
}

export function* watcherUserLoggingIn() {
    yield takeLatest(USER_LOGGING_IN, workerUserLoggingIn)
}


export function* workerUserLoggingIn(actionObject) {
    // 1. take the userName and password that was entered
    const { userName, password } = actionObject;
    // console.log('saga | ACTION OBJECT: ', actionObject);
    const url = 'https://that-dads-logins.herokuapp.com/api/users';
    let isError = false;
    let isLoggedIn = false;
    let specificUser = {};

    // 2. check it against the users API 
    yield fetch(url)
        .then(res => res.json())
        .then(json => {
            specificUser = json.filter(each => each.userName === userName)[0];
            console.log('specific user: ', specificUser);

            if (specificUser.password === password) {
                isLoggedIn = true;
            }
            if (specificUser.password !== password) {
                alert('I remembered userName but password is wrong. weird. check log.');
                console.log(`Password Mismatch. Api Password was ${specificUser.password} and entered/AsyncStorage password was ${password}`);
            }
        })
        .catch(err => console.log('api fetching error: ', err));

    
    updateAsyncWithUserInformation(specificUser);
    const { email, _id, likes, dislikes, tagline, longitude, latitude } = specificUser;
    isLoggedIn ? yield put({ type: USER_LOGGED_IN, userDetails: specificUser }) : yield put({ type: USER_LOGIN_FAIL });
    
}

// export function* workerUserLoggingIn(actionObject) {
//     const { password, userName } = actionObject;
//     const url = 'https://that-dads-logins.herokuapp.com/api/users';
//     let isError = false;
//     let isLoggedIn = false;
//     let specificUser = {};

//     yield fetch(url)
//             .then(res => res.json())
//             .then(json => {
//                 specificUser = json.filter(each => each.userName === userName)[0];

//                 if (specificUser.password === password) {
//                     isLoggedIn = true;

//                     AsyncStorage.setItem('userName', userName);
//                     AsyncStorage.setItem('password', password);
//                     AsyncStorage.setItem('userId', specificUser._id);


//                 }

//                 if (json.length <= 1) {
//                     isLoggedIn = false;
//                 }
//             })
//             .catch(err => {
//                 console.log('workerUserLoggingIn saga | login error / userName failed to match a user: ', err);
//             })

//     if (!isLoggedIn) {
//         alert('Incorrect Password / Username');
//         return;
//     }

//     updateAsyncWithUserInformation(specificUser);

//     const { email, _id, likes, dislikes, tagline, longitude, latitude } = specificUser;

//     isLoggedIn ? yield put({ type: USER_LOGGED_IN, email, userName, password, userId: _id, likes, dislikes, tagline, longitude, latitude }) : yield put({ type: USER_LOGIN_FAIL });
// }