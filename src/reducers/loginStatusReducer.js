
import { CHECK_LOGIN_STATUS, USER_ALREADY_LOGGED_IN, USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGGED_OUT, LOAD_LOGIN_PAGE } from '../actions/';

let initialState = {
    isLoggedIn: false,
    userName: '',
    longitude: '',
    latitude: '',
    password: '',
    userId: '',
    likes: '',
    dislikes: '',
    tagline: '',
    isLoading: false,
    asyncDataSaved: false,
};

export const loginStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LOGIN_PAGE:
            console.log('LOAD_LOGIN_PAGE');
            return {
                ...state
            }
            break;

        case CHECK_LOGIN_STATUS:
            console.log('CHECK_LOGIN_STATUS');
            return {
                ...state,
                isLoggedIn: false,
            }
            break;

        case USER_ALREADY_LOGGED_IN:
            console.log('USER_ALREADY_LOGGED_IN');
            return {
                ...state,
                isLoggedIn: true,
            }
            break;

        case USER_LOGGING_IN:
            console.log('USER_LOGGING_IN');
            return {
                ...state,
                isLoggedIn: false,
                isLoading: true,
                userId: action.userId,
                password: action.password,
            }
        break;

        case USER_LOGGED_IN:
            console.log('USER_LOGGED_IN: ', action);
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,

                password: action.userDetails.password,
                userName: action.userDetails.userName,
                email: action.userDetails.email,
                userId: action.userDetails._id,
                likes: action.userDetails.likes,
                dislikes: action.userDetails.dislikes,
                tagline: action.userDetails.tagline,
                longitude: action.userDetails.longitude,
                latitude: action.userDetails.latitude, 
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
