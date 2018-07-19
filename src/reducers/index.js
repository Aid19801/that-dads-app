
import { combineReducers } from 'redux';
import { SUBMIT_USER, SUBMIT_USER_FAIL, SUBMIT_USER_OK } from '../actions/';

let initialState = { 
    data: [], 
    loading: false, 
    error: false,
    email: '',
    password: '',
    userName: '',
};

const submitUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_USER:
            return {
                ...state,
                loading: true,
                userName: action.userName,
                password: action.password,
                email: action.email,
            }
            break;
        case SUBMIT_USER_OK:
            return {
                ...state,
                loading: false,
                data: action.data,
            }
            break;
        case SUBMIT_USER_FAIL:
            return {
                ...state,
                error: action.error,
            }
            break;

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    submitUserReducer
});

export default rootReducer;