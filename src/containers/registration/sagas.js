import { put, takeLatest, all } from 'redux-saga/effects'
import { SUBMIT_USER, SUBMIT_USER_OK, SUBMIT_USER_FAIL } from '../../actions/index';
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
        }).then((res) => {
            if (res.status === 200) {
                return res.status;
            }
            return res;
        }).catch((err) => {
            return err;
        })

        yield put({ type: SUBMIT_USER_OK, data: dataBack })
    } catch (error) {
        console.log('error: ', error);
        yield put({ type: SUBMIT_USER_FAIL, error });
    }
}
