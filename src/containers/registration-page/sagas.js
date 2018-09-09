import { put, takeLatest, call } from 'redux-saga/effects'
import { SUBMIT_USER, SUBMIT_USER_OK, SUBMIT_USER_FAIL } from '../../actions/index';
import { AsyncStorage } from 'react-native';
import { setUniqueIdentifierDB } from '../../utils/utils';

export function* watcherRegisterUser() {
    yield takeLatest(SUBMIT_USER, workerRegisterUser);
}

// const mockUsers = require('../../utils/mock.json').users;
// export function* workerRegisterUserOffline(actionObject) {
//     console.log('actionObject: ', actionObject);
//     try {
//         console.log('1');
//         mockUsers.push(actionObject);
//         console.log('2: ', mockUsers);
//         return mockUsers;
//     } catch (error) {
//         console.log('error: ', error);
//         yield put({ type: SUBMIT_USER_FAIL, error });
//     }
//     console.log('3: mockUsers: ', mockUsers);
//     yield put({ type: SUBMIT_USER_OK, data: Date.now(), })
// }

const url = 'https://that-dads-logins.herokuapp.com/api/users';
export function* workerRegisterUser(actionObject) {
    const { email, password, userName } = actionObject;

    try {
        const dataBack = yield fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                userName,
                password,
            }),
        }).then((res) => res.json())
            .then(json => {
                setUniqueIdentifierDB(json.userId)
                return json;
            })
            .catch((err) => {
                console.log('user-registration error: ', err);
                return err;
            })
        yield put({ type: SUBMIT_USER_OK, data: dataBack.userId })

    } catch (error) {
        console.log('error: ', error);
        yield put({ type: SUBMIT_USER_FAIL, error });
    }
}

