
import { combineReducers } from 'redux';
import { DATA_REQUESTED, DATA_RECEIVED, DATA_FAILED } from '../actions/';

let initialState = { data: [], loading: false, error: false };

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_REQUESTED:
            return {
                ...state,
                loading: true,
            }
            break;
        case DATA_RECEIVED:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
            break;
        case DATA_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            }
            break;

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;