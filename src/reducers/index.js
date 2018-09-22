import { combineReducers } from 'redux';

import { appStateReducer } from './appStateReducer';
import { loginStatusReducer } from './loginStatusReducer';
import { newsReducer } from './newsReducer';
import { submitUserReducer } from './submitUserReducer';

const rootReducer = combineReducers({
    appStateReducer,
    loginStatusReducer,
    newsReducer,
    submitUserReducer,
});

export default rootReducer;