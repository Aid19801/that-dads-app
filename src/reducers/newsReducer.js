import * as actions from '../actions/index'

let initialState = {
    loading: false,
    loaded: false,
    stories: [],
    error: null,
};

export const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.LOAD_NEWS:
            console.log('LOAD_NEWS');
        case actions.LOADING_NEWS:
            console.log('LOADING_NEWS');
            return {
                ...state,
                loading: true,
            }
            break;
        case actions.LOADED_NEWS:
            console.log('LOADED_NEWS');
            return {
                ...state,
                loading: false,
                loaded: true,
                stories: action.stories
            }
            break;
        case actions.LOAD_NEWS_FAIL:
            console.log('LOAD_NEWS_FAIL', action.error);
            return {
                ...state,
                error: action.error
            }
            break;

        default:
        return state;
    }
}