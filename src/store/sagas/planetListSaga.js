import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
import * as actions from '../actions/planets';
import _fetch from '../../api/fetch';

function* planetListRequestSaga(action) {
    //   show loader from somewhere
      try {
          const res = yield call(_fetch, "https://findfalcone.herokuapp.com/planets");
          yield put(actions.planetListSuccess(res));
    //     Make get api request with the given data
    //     On Success
    //     1. Dispatch Action To Redux Store with the user data
    //     2. Read the user credentials from headers
    //     3. store the ceredentials in AsyncStore
    //     hide loader
    //     4. Take him to next page
      } catch (error) {
            console.log(error);
    //       hide loader
    //       handle error on UI
    //     console.log(error);
      }
}

function* vehicleListRequestSaga(action) {
  //   show loader from somewhere
    try {
        const res = yield call(_fetch, "https://findfalcone.herokuapp.com/vehicles");
        yield put(actions.vehicleListSuccess(res));
  //     Make get api request with the given data
  //     On Success
  //     1. Dispatch Action To Redux Store with the user data
  //     2. Read the user credentials from headers
  //     3. store the ceredentials in AsyncStore
  //     hide loader
  //     4. Take him to next page
    } catch (error) {
          console.log(error);
  //       hide loader
  //       handle error on UI
  //     console.log(error);
    }
}

export function* watchPlanetListRequest() {
    // Take Last Action Only
    yield takeLatest(actions.PLANETS_REQUEST, planetListRequestSaga);
}

export function* watchVehicleListRequest() {
  // Take Last Action Only
  yield takeLatest(actions.VEHICLE_REQUEST, vehicleListRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchPlanetListRequest),fork(watchVehicleListRequest)]);
}
  
  
