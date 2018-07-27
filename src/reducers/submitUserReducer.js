import { SUBMIT_USER, SUBMIT_USER_FAIL, SUBMIT_USER_OK } from '../actions/';

let initialSubmitUserState = {
    data: [],
    loading: false,
    error: false,
    email: '',
    password: '',
    userName: '',
    userId: ''
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
        console.log('ACTION.data userId: ', action.data);
            return {
                ...state,
                loading: false,
                userId: action.data
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
