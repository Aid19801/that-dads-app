// import { AsyncStorage } from 'react-native'
// import { put, call, takeLatest } from 'redux-saga/effects';
// import { CHECK_LOGIN_STATUS, USER_LOGGING_IN, USER_ALREADY_LOGGED_IN, USER_LOGGED_IN, USER_LOGIN_FAIL, LOAD_LOGIN_PAGE } from '../../actions/index';
// import { updateAsyncWithUserInformation, getUserAsyncStorage } from '../../utils/utils';


// export function* watcherCheckLoginStatus() {
//     console.log('1 Saga | watcher CheckLoginStatus is fired');
//     yield takeLatest(CHECK_LOGIN_STATUS, workerCheckLoginStatus);
// }

// export function* workerCheckLoginStatus() {
//     console.log('2 Saga | worker CheckLoginStatus is fired');
// }

// export function* watcherLoadLoginPage() {
//     // console.log('Saga | watcher LoadLoginPage is fired');
//     yield takeLatest(LOAD_LOGIN_PAGE, workerLoadLoginPage);
// }

// export function* workerLoadLoginPage() {
//     // console.log('Saga | worker LoadLoginPage is fired');
//     try {
//         // console.log('is this working ===');
//         const foo = AsyncStorage.getItem('userId').then(res => res.data)
//         // console.log('foo is: ', foo);
//     } catch(err) {
//         console.log('err: ', err);
//     }
// }

// export function* watcherUserLoggingIn() {
//     yield takeLatest(USER_LOGGING_IN, workerUserLoggingIn);
// }

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
