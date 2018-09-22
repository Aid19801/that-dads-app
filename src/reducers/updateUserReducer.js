import * as actions from '../actions';

const updateUserReducer = (state, action) => {
    switch(action.type) {
        case actions.UPDATE_USER_DETAILS:
            return {
                ...state,
                password: action.password,
                userName: action.userName,
                email: action.email,
            }
            break;
    }
}