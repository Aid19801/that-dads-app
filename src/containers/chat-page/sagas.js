import { call, put, takeLatest }   from 'redux-saga/effects';
import * as constants from '../../reducers/constants';
import * as actions from '../../actions';

let chatMsgs = [];

export function* watcherLoadChatPage() {
    yield takeLatest(actions.LOAD_CHAT_PAGE, workerLoadChatPage);
}

export function* workerLoadChatPage() {
    yield put({ type: actions.LOADING_CHAT_PAGE });
    let isLoaded = false;
    // let chatMsgs = [];

    try {

        // ++++ if online use this:-
        yield fetch(constants.CHAT_LOG_API)
            .then(res => res.json())
            .then(json => {
                json.length > 0 ? isLoaded = true : isLoaded = false;
                chatMsgs = json;
                return;
            })
            .catch(err => console.log('saga | chat log api error: ', err));

    } catch (error) {
        console.log('saga | chat api error: ', error);
        return error;
    }

    console.log('arr:::: ', chatMsgs);
    isLoaded ? yield put({ type: actions.LOADED_CHAT_PAGE, chatMsgs }) : yield put({ type: actions.LOAD_CHAT_PAGE_FAIL })
}

