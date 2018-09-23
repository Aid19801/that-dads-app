
import { CHECK_LOGIN_STATUS, USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGGED_OUT, ASYNC_DATA_SAVED} from '../actions/';

let initialState = {
    isLoggedIn: false,
    userName: '',
    password: '',
    userId: '',
    isLoading: false,
    asyncDataSaved: false,
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
                isLoading: true,
                userId: action.userName,
                password: action.password,
            }
        break;

        case USER_LOGGED_IN:
            console.log('USER_LOGGED_IN', action);
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,

                password: action.password,
                userName: action.userName,
                email: action.email,
                userId: action.userId,
                likes: action.likes,
                dislikes: action.dislikes,
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
