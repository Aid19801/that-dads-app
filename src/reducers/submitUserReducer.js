import { SUBMIT_USER, SUBMIT_USER_FAIL, SUBMIT_USER_OK } from '../actions/';

let initialSubmitUserState = {
    data: [],
    loading: false,
    error: false,
    email: '',
    password: '',
    userName: '',
    userId: '',
    isRegistered: false,
};

export const submitUserReducer = (state = initialSubmitUserState, action) => {
    switch (action.type) {
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
        console.log('submit user ok: ', action.data);
            return {
                ...state,
                loading: false,
                userId: action.data,
                isRegistered: true,
            }
            break;
        case SUBMIT_USER_FAIL:
            console.log('submit user fail: ', action.data);
            return {
                ...state,
                isRegistered: false,
                error: action.error,
            }
            break;

        default:
            return state;
    }
}
