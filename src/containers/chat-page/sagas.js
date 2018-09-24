import { call, put, takeLatest }   from 'redux-saga/effects';
import * as actions from '../../actions';

export function* watcherLoadChatPage() {
    yield takeLatest(actions.LOAD_CHAT_PAGE, workerLoadChatPage);
}

export function* workerLoadChatPage() {
    console.log('WORKER SAGA CHAT PAGE FIRED');
    yield put({ type: actions.LOADING_CHAT_PAGE });
    const url = 'https://that-dads-chat.herokuapp.com/api';
    let isLoaded = false;
    let chatMsgs = [];

    try {

        // ++++ if online use this:-
        yield fetch(`${url}`)
            .then(res => res.json())
            .then(json => {
                json.mocks.length > 0 ? isLoaded = true : isLoaded = false;
                chatMsgs = json.mocks;
                console.log(' saga   oisf =======>> ', chatMsgs.length);
                return;
            })
            .catch(err => console.log('saga | chat api error: ', err));

    } catch (error) {
        console.log('saga | chat api error: ', error);
        return error;
    }

    isLoaded ? yield put({ type: actions.LOADED_CHAT_PAGE, chatMsgs }) : yield put({ type: actions.LOAD_CHAT_PAGE_FAIL })
}