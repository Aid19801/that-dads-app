import { SUBMIT_USER, SUBMIT_USER_FAIL, SUBMIT_USER_OK, ASYNC_DATA_SAVED } from '../actions/';

let initialSubmitUserState = {
    data: [],
    loading: false,
    error: false,
    email: '',
    password: '',
    userName: '',
    userId: '',
    isRegistered: false,
    asyncDataSaved: false,
};

export const registerUserReducer = (state = initialSubmitUserState, action) => {
    switch (action.type) {
        case SUBMIT_USER:
        console.log('SUBMIT_USER: ', action);
            return {
                ...state,
                loading: true,
                userName: action.userName,
                password: action.password,
                email: action.email,
            }
            break;

        case SUBMIT_USER_OK:
        console.log('submit user ok: ', action);
            return {
                ...state,
                loading: false,
                isRegistered: true,
                
                userId: action.userId,
                password: action.password,
                userName: action.userName,
                email: action.email,
            }
            break;

        case SUBMIT_USER_FAIL:
            console.log('submit user fail: ', action);
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
