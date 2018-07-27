import { createStore, applyMiddleware } from 'redux';

// ** redux persist
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)



import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import reducers from './reducers/index';

import { watcherRegisterUser } from './containers/registration/sagas';
import { watcherGetLoginStatus } from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        watcherRegisterUser(),
        watcherGetLoginStatus(),
    ])
}

sagaMiddleware.run(rootSaga);

export default store;