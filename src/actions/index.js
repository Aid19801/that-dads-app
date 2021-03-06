
// registration
export const SUBMIT_USER = 'SUBMIT_USER';
export const SUBMIT_USER_OK = 'SUBMIT_USER_OK';
export const SUBMIT_USER_FAIL = 'SUBMIT_USER_FAIL';

export const submitUser = (email, userName, password, likes, dislikes, tagline) => {
    return {
        type: SUBMIT_USER,
        email,
        userName,
        password,
        likes,
        dislikes,
        tagline,
    }
    
}

// login
export const LOAD_LOGIN_PAGE = 'LOAD_LOGIN_PAGE';
export const CHECK_LOGIN_STATUS = 'CHECK_LOGIN_STATUS';
export const USER_ALREADY_LOGGED_IN = 'USER_ALREADY_LOGGED_IN';
export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const ASYNC_DATA_SAVED = 'ASYNC_DATA_SAVED';

// export const checkLoginStatus = (id) => {
//     return {
//         type: CHECK_LOGIN_STATUS,
//         id,
//     }
// }

// news
export const LOAD_NEWS = 'LOAD_NEWS';
export const LOADING_NEWS = 'LOADING_NEWS';
export const LOADED_NEWS = 'LOADED_NEWS';
export const LOAD_NEWS_FAIL = 'LOAD_NEWS_FAIL';

// userLocation
export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION';
export const UPDATING_USER_LOCATION = 'UPDATING_USER_LOCATION';
export const UPDATED_USER_LOCATION = 'UPDATED_USER_LOCATION';
export const UPDATE_USER_LOCATION_FAIL = 'UPDATE_USER_LOCATION_FAIL';

// mapLoading
export const LOAD_MAP = 'LOAD_MAP';
export const LOADING_MAP = 'LOADING_MAP';
export const LOADED_MAP = 'LOADED_MAP';
export const LOAD_MAP_FAIL = 'LOAD_MAP_FAIL';

// chat page
export const LOAD_CHAT_PAGE = 'LOAD_CHAT_PAGE';
export const LOADING_CHAT_PAGE = 'LOADING_CHAT_PAGE';
export const LOADED_CHAT_PAGE = 'LOADED_CHAT_PAGE';
export const LOAD_CHAT_PAGE_FAIL = 'LOAD_CHAT_PAGE_FAIL';
// chat msgs
export const LOAD_CHAT_MESSAGES = 'LOAD_CHAT_MESSAGES';
export const LOADING_CHAT_MESSAGES = 'LOADING_CHAT_MESSAGES';
export const LOADED_CHAT_MESSAGES = 'LOADED_CHAT_MESSAGES';
export const LOAD_CHAT_MESSAGES_FAIL = 'LOAD_CHAT_MESSAGES_FAIL';
export const CHECK_FOR_NEW_MESSAGES = 'CHECK_FOR_NEW_MESSAGES';
export const CHECKING_FOR_NEW_MESSAGES = 'CHECKING_FOR_NEW_MESSAGES';
export const RECEIVED_NEW_MESSAGES = 'RECEIVED_NEW_MESSAGES';
export const NO_NEW_MESSAGES = 'RECEIVED_NEW_MESSAGES';