import { SUBMIT_USER, SUBMIT_USER_FAIL, SUBMIT_USER_OK, ASYNC_DATA_SAVED } from '../actions/';

let initialSubmitUserState = {
    data: [],
    loading: false,
    error: false,
    email: '',
    password: '',
    userName: '',
    userId: '',
    likes: '',
    dislikes: '',
    tagline: '',
    longitude: '',
    latitude: '',
    isRegistered: false,
    asyncDataSaved: false,
};

export const registerUserReducer = (state = initialSubmitUserState, action) => {
    switch (action.type) {
        case SUBMIT_USER:
        console.log('SUBMIT_USER');
            return {
                ...state,
                loading: true,
                userName: action.userName,
                password: action.password,
                email: action.email,
            }
            break;

        case SUBMIT_USER_OK:
            console.log('SUBMIT_USER_OK');
            return {
                ...state,
                loading: false,
                isRegistered: true,
                
                userId: action.userId,
                password: action.password,
                userName: action.userName,
                email: action.email,
                likes: action.likes,
                dislikes: action.dislikes,
                tagline: action.tagline,

                longitude: action.longitude,
                latitude: action.latitude,
            }
            break;

        case SUBMIT_USER_FAIL:
            console.log('SUBMIT_USER_FAIL: ', action);
            return {
                ...state,
                isRegistered: false,
                error: action.error,
            }
            break;

        case ASYNC_DATA_SAVED:
            console.log('ASYNC_DATA_SAVED');
            return {
                ...state,
                asyncDataSaved: true,
            }
            break;

        default:
            return state;
    }
}
