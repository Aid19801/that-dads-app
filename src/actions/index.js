export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const DATA_FAILED = 'DATA_FAILED';
import Data from '../data/users.json';

export const getData = () => {
    return {
        type: DATA_REQUESTED,
    }
    
}
