import { put, takeLatest, call } from 'redux-saga/effects'
import { SUBMIT_USER, SUBMIT_USER_OK, SUBMIT_USER_FAIL, ASYNC_DATA_SAVED } from '../../actions/index';
import { AsyncStorage } from 'react-native';
import { setUserAsyncStorage, setUniqueIdentifierDB } from '../../utils/utils';

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

            const isSavedToAsyncStorage = setUserAsyncStorage(dataBack.userId, userName, email, password);

            if (isSavedToAsyncStorage) {
                yield put({ type: ASYNC_DATA_SAVED });
                yield put({
                    type: SUBMIT_USER_OK,
                    userId: dataBack.userId,
                    password,
                    email,
                    userName,
                })
            }
    } catch (error) {
        console.log('error: ', error);
        yield put({ type: SUBMIT_USER_FAIL, error });
    }
}

