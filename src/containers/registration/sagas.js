import { put, takeLatest, call } from 'redux-saga/effects'
import { SUBMIT_USER, SUBMIT_USER_OK, SUBMIT_USER_FAIL } from '../../actions/index';
import { AsyncStorage } from 'react-native';

const url = 'https://that-dads-logins.herokuapp.com/api/users';


export function* watcherRegisterUser() {
    yield takeLatest(SUBMIT_USER, workerRegisterUser);
}

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
                return json;
            })
            .catch((err) => {
                console.log('user-registration error: ', err);
                return err;
            })
        yield call(AsyncStorage.setItem, 'userId', dataBack.userId);
        yield put({ type: SUBMIT_USER_OK, data: dataBack.userId })

    } catch (error) {
        console.log('error: ', error);
        yield put({ type: SUBMIT_USER_FAIL, error });
    }
}

