import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../../actions';
import { refreshUserLocation } from '../../utils/utils';

export function* watcherUpdateUserLocation() {
    yield takeLatest(actions.UPDATE_USER_LOCATION, workerUpdateUserLocation);
}

export function* workerUpdateUserLocation() {
    yield put({ type: actions.UPDATING_USER_LOCATION })
    
    const newCoordinates = yield call(refreshUserLocation)

    yield put({ type: actions.UPDATED_USER_LOCATION,
        longitude: newCoordinates.longitude,
        latitude: newCoordinates.latitude,
    })
}