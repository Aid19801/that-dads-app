import { call, put, takeLatest }   from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as constants from '../../reducers/constants';
import * as actions from '../../actions';
import { getUserAsyncStorage } from '../../utils/utils';

let isLoaded = false;

export function* watcherLoadChatPage() {
    console.log('watcher fired!');
    yield takeLatest(actions.LOAD_CHAT_PAGE, workerLoadChatPage);
}

export function* workerLoadChatPage() {
    yield put({ type: actions.LOADING_CHAT_PAGE });
    console.log('1');
    // let x = yield call(getUserAsyncStorage);
    console.log('2');
    let userId = yield call(AsyncStorage.getItem, 'userId');
    console.log('3: ', userId);
    // console.log('x is: ', x);
    console.log('y is: ', y);
    isLoaded = true;
    console.log('4');
    isLoaded ? yield put({ type: actions.LOADED_CHAT_PAGE }) : yield put({ type: actions.LOAD_CHAT_PAGE_FAIL })
}

