
import { combineReducers } from 'redux';
import { appStateReducer } from './appStateReducer';
import { submitUserReducer } from './submitUserReducer';
import { loginStatusReducer } from './loginStatusReducer';

const rootReducer = combineReducers({
    submitUserReducer,
    appStateReducer,
    loginStatusReducer,
});

export default rootReducer;