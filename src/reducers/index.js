import { combineReducers } from 'redux';

import { appStateReducer } from './appStateReducer';
import { loginStatusReducer } from './loginStatusReducer';
import { newsReducer } from './newsReducer';
import { registerUserReducer } from './registerUserReducer';

const rootReducer = combineReducers({
    appStateReducer,
    loginStatusReducer,
    newsReducer,
    registerUserReducer,
});

export default rootReducer;