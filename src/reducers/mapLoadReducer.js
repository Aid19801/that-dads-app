import * as actions from '../actions';

let initialState = {
    isLoading: false,
    isError: null,
};

export const mapLoadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOAD_MAP:
            console.log('LOAD_MAP');
            return {
                ...state,
                isLoading: false,
            }
            break;

        case actions.LOADING_MAP:
            console.log('LOADING_MAP');
            return {
                ...state,
                isLoading: true,
            }
            break;

        case actions.LOADED_MAP:
            console.log('LOADED_MAP');
            return {
                ...state,
                isLoading: false,
            }
            break;

        case actions.LOAD_MAP_FAIL:
            console.log('LOAD_MAP_FAIL');
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