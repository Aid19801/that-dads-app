export const SUBMIT_USER = 'SUBMIT_USER';
export const SUBMIT_USER_OK = 'SUBMIT_USER_OK';
export const SUBMIT_USER_FAIL = 'SUBMIT_USER_FAIL';
// import Data from '../data/users.json';

export const submitUser = (email, userName, password) => {
    return {
        type: SUBMIT_USER,
        email,
        userName,
        password,
    }
    
}
