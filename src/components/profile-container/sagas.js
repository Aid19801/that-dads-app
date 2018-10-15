import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { UPDATE_USER_DETAILS } from '../../actions/index';

export function* watcherUpdateUserDetails() {
    yield takeLatest(UPDATE_USER_DETAILS, workerUpdateUserDetails);
}

const url = 'https://that-dads-logins.herokuapp.com/api/users';
export function* workerUpdateUserDetails(actionObject) {
    console.log('1. action object: ', actionObject);
    let userId = yield call(AsyncStorage.getItem, 'userId');
    const { email, password, userName } = actionObject;
    // written blind vv
    let urlToTarget = `${url}/${userId}`;

    try {
        yield fetch(`${url}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: 'HUBERT293',
                userName: 'HUBERT293',
                email: 'HUBERT293',
            }),
        })
            .then(res => res.json())
            .then(json => {
                console.log('json back: ', json);
            })
            .catch(err => console.log('saga | fetch/put update user details | error: ', err))
    } catch(err) {
        console.log('saga | try/catchupdating user details error: ', err);
    }

    
    // ^^ this needs checking

    /// patch/put request goes here, update database.
    // get userId
    // verify action object is coming through
    // take new actionObject password/userName
    // push to database
    // check asyncStorage is correct and reduxify isn't still
    // showing previous informaiton.
}

// fetch('http://localhost:4000/api/users/5b9692fa6ba2e600145e1de6', {
//     method: 'PUT',
//     headers: {
//         'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         email: "POODLE@gmail.com",
//         userName: "pooddle3i765",
//         password: "poddle",
//     }),
// }).then((res) => res.json())
//     .then(json => {
//         console.log(json)
//     })
//     .catch((err) => {
//         console.log('error: ', err);
//     })
