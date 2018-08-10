
import { CHECK_LOGIN_STATUS, USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/';

let initialState = {
    isLoggedIn: false,
    userId: '',
};

export const loginStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_LOGIN_STATUS:
            return {
                ...state,
                isLoggedIn: false,
            }
            break;

        case USER_LOGGED_IN:
        console.log('action id is: ', action.id);
            return {
                ...state,
                isLoggedIn: true,
                userId: action.id,
            }
            break;

        case USER_LOGGED_OUT:
            console.log(' reducer heard: user logged out');
            return {
                ...state,
                isLoggedIn: false,
            }
            break;

        default:
            return state;
    }
}
