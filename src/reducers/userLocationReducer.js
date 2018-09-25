import * as actions from '../actions';

let initialState = {
    isLoading: false,
    isError: null,
    longitude: 0,
    latitude: 0,
};

export const userLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_USER_LOCATION:
            console.log('UPDATE_USER_LOCATION');
        return {
            ...state,
            isLoading: false,
        }
        break;

        case actions.UPDATING_USER_LOCATION:
            console.log('UPDATING_USER_LOCATION');
            return {
                ...state,
                isLoading: true,
            }
            break;

        case actions.UPDATED_USER_LOCATION:
            console.log('UPDATED_USER_LOCATION', action);
            return {
                ...state,
                isLoading: false,
                longitude: action.longitude,
                latitude: action.latitude,
            }
            break;

        case actions.UPDATE_USER_LOCATION_FAIL:
            console.log('UPDATE_USER_LOCATION_FAIL');
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