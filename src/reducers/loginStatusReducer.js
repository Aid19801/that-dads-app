
import { CHECK_LOGIN_STATUS, USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/';

let initialState = {
    isLoggedIn: false,
    userId: '',
    password: '',
};

export const loginStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_LOGIN_STATUS:
            console.log('CHECK_LOGIN_STATUS');
            return {
                ...state,
                isLoggedIn: false,
            }
            break;

        case USER_LOGGING_IN:
            console.log('USER_LOGGING_IN');
            return {
                ...state,
                isLoggedIn: false,
                userId: action.userName,
                password: action.password,
            }
        break;

        case USER_LOGGED_IN:
            console.log('USER_LOGGED_IN');
            return {
                ...state,
                isLoggedIn: true,
                userId: action.userId,
            }
            break;

        case USER_LOGGED_OUT:
            console.log('USER_LOGGED_OUT');
            return {
                ...state,
                isLoggedIn: false,
            }
            break;

        default:
            return state;
    }
}

// create new Reducer for process of logging-in
// USER_LOGGING_IN (hits saga to do async/api which actions --> ), USER_LOGIN_SUCCESS, USER_LOGIN_FAIL
// changes app state
// ALL of this (reducer, saga, actions and constants should be inside login-page container)