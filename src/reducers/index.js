import { combineReducers } from 'redux';

import { appStateReducer } from './appStateReducer';
import { chatPageReducer } from './chatPageReducer';
import { loginStatusReducer } from './loginStatusReducer';
import { mapLoadReducer } from './mapLoadReducer';
import { newsReducer } from './newsReducer';
import { registerUserReducer } from './registerUserReducer';
import { userLocationReducer } from './userLocationReducer';

const rootReducer = combineReducers({
    appStateReducer,
    chatPageReducer,
    loginStatusReducer,
    mapLoadReducer,
    newsReducer,
    registerUserReducer,
    userLocationReducer,
});

export default rootReducer;