
// registration
export const SUBMIT_USER = 'SUBMIT_USER';
export const SUBMIT_USER_OK = 'SUBMIT_USER_OK';
export const SUBMIT_USER_FAIL = 'SUBMIT_USER_FAIL';

export const submitUser = (email, userName, password) => {
    return {
        type: SUBMIT_USER,
        email,
        userName,
        password,
    }
    
}

// login
export const CHECK_LOGIN_STATUS = 'CHECK_LOGIN_STATUS';
export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const ASYNC_DATA_SAVED = 'ASYNC_DATA_SAVED';

export const checkLoginStatus = (id) => {
    return {
        type: CHECK_LOGIN_STATUS,
        id,
    }
}

// news
export const LOAD_NEWS = 'LOAD_NEWS';
export const LOADING_NEWS = 'LOADING_NEWS';
export const LOADED_NEWS = 'LOADED_NEWS';
export const LOAD_NEWS_FAIL = 'LOAD_NEWS_FAIL';

