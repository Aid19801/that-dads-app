import { put, call, takeLatest } from 'redux-saga/effects';
import { LOAD_NEWS, LOADING_NEWS, LOADED_NEWS, LOAD_NEWS_FAIL } from '../../actions/index'

export function* watcherLoadNews() {
    yield takeLatest(LOAD_NEWS, workerLoadNews);
}
const url = 'https://dads-scraper.herokuapp.com'
export function* workerLoadNews() {

    let isLoaded = false;
    let stories = [];
    let err = null;

    try {

        // ++++ if using mocks use this instead:
        isLoaded = true;

        // ++++ if online use this:-
        // yield fetch(`${url}`)
        //     .then(res => res.json())
        //     .then(json => {
        //         json.length > 0 ? isLoaded = true : isLoaded = false;
        //         json.length > 0 ? stories = json : stories = [];
        //         return;
        //     })
        //     .catch(err => console.log('news api error: ', err));

        } catch(e) {
            console.log('Load-News Saga error: ', e);
            err = e;
        }
        
    isLoaded ? yield put({ type: LOADED_NEWS, stories }) : yield put({ type: LOAD_NEWS_FAIL })
}