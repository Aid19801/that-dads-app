import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import reducers from './reducers/index';

import { watcherRegisterUser } from './containers/registration-page/sagas';
import { watcherUpdateUserLocation } from './containers/map-page/sagas';
import { watcherLoadNews } from './components/content-container/sagas';
import { watcherLoadChatPage } from './containers/chat-page/sagas';
import { watcherCheckLoginStatus, watcherUserLoggingIn } from './containers/login-page/sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        watcherCheckLoginStatus(),
        watcherLoadNews(),
        watcherLoadChatPage(),
        watcherRegisterUser(),
        watcherUpdateUserLocation(),
        watcherUserLoggingIn(),
        // watcherGetLoginStatus(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;