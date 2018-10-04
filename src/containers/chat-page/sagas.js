import { call, put, takeLatest }   from 'redux-saga/effects';
import * as actions from '../../actions';

export function* watcherLoadChatPage() {
    yield takeLatest(actions.LOAD_CHAT_PAGE, workerLoadChatPage);
}

export function* workerLoadChatPage() {
    yield put({ type: actions.LOADING_CHAT_PAGE });
    const url = 'https://that-dads-chat-log.herokuapp.com/';
    let isLoaded = false;
    let chatMsgs = [];

    try {

        // ++++ if online use this:-
        yield fetch(`${url}`)
            .then(res => res.json())
            .then(json => {
                json.length > 0 ? isLoaded = true : isLoaded = false;
                chatMsgs = json;
                return;
            })
            .catch(err => console.log('saga | chat api error: ', err));

    } catch (error) {
        console.log('saga | chat api error: ', error);
        return error;
    }

    isLoaded ? yield put({ type: actions.LOADED_CHAT_PAGE, chatMsgs }) : yield put({ type: actions.LOAD_CHAT_PAGE_FAIL })
}