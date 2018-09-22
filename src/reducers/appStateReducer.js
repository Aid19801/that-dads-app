import { APP_LOADING, APP_LOADED, 
    APP_FAILED, APP_CONNECTED, APP_DISCONNECTED } from './constants';

let initialAppState = {
    appLoading: false,
    appLoaded: false,
}

export const appStateReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case APP_LOADING:
            console.log('red | APP_LOADING');
            return {
                ...state,
                appLoading: true,
                appLoaded: false,
            }
        break;
        
        case APP_LOADED:
            console.log('red | APP_LOADED');
            return {
                ...state,
                appLoading: false,
                appLoaded: true,
            }
        break;

        case APP_FAILED:
            console.log('red | APP_FAILED');
            return {
                ...state,
                appLoading: false,
            }
        break;

        default:
        return state;
    }
}

