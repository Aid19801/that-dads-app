import * as actions from '../actions';

let initialState = {
    isLoading: false,
    isError: null,
};

export const chatPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOAD_CHAT_PAGE:
            console.log('LOAD_CHAT_PAGE');
            return {
                ...state,
                isLoading: false,
            }
            break;

        case actions.LOADING_CHAT_PAGE:
            console.log('LOADING_CHAT_PAGE');
            return {
                ...state,
                isLoading: true,
            }
            break;

        case actions.LOADED_CHAT_PAGE:
            console.log('LOADED_CHAT_PAGE');
            return {
                ...state,
                isLoading: false,
                chatMsgs: action.chatMsgs,
            }
            break;

        case actions.LOAD_CHAT_PAGE_FAIL:
            console.log('LOAD_CHAT_PAGE_FAIL');
            return {
                ...state,
                isLoading: false,
                isError: action.error,
            }
            break;

        case actions.LOAD_CHAT_MESSAGES:
            console.log('LOAD_CHAT_MESSAGES');
            return {
                ...state,
                isLoading: false,
                isError: action.error,
            }
            break;

        case actions.LOADING_CHAT_MESSAGES:
            console.log('LOADING_CHAT_MESSAGES');
            return {
                ...state,
                isLoading: false,
                isError: action.error,
            }
            break;

        case actions.LOADED_CHAT_MESSAGES:
            console.log('LOADED_CHAT_MESSAGES');
            return {
                ...state,
                isLoading: false,
                isError: action.error,
            }
            break;

        case actions.LOAD_CHAT_MESSAGES_FAIL:
            console.log('LOAD_CHAT_MESSAGES_FAIL');
            return {
                ...state,
                isLoading: false,
                isError: action.error,
            }
            break;

        default:
            return state;
    }
}