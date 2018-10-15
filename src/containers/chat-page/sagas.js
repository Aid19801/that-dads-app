import { call, put, takeLatest }   from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as constants from '../../reducers/constants';
import * as actions from '../../actions';
import { getUserAsyncStorage } from '../../utils/utils';

let isLoaded = false;

export function* watcherLoadChatPage() {
    console.log('watcher fired??');
    yield takeLatest(actions.LOAD_CHAT_PAGE, workerLoadChatPage);
}

export function* workerLoadChatPage() {
    yield put({ type: actions.LOADING_CHAT_PAGE });
    isLoaded = true;
    // originally was going to pull userId from async storage here
    // but we can get that from redux in the chat page component directly.
    isLoaded ? yield put({ type: actions.LOADED_CHAT_PAGE }) : yield put({ type: actions.LOAD_CHAT_PAGE_FAIL })
}

