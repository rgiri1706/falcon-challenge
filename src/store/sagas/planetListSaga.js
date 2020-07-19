import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
import * as actions from '../actions/planets';
import _fetch, { _fetchToken } from '../../api/fetch';

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

function* tokenRequestSaga(action) {
  //   show loader from somewhere
    try {
        const res = yield call(_fetchToken, "https://findfalcone.herokuapp.com/token", {method: "POST"});
        yield put(actions.getTokenSuccess(res.token));
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

function* findFalconRequestSaga(action) {
  //   show loader from somewhere
    try {
        const res = yield call(_fetchToken, "https://findfalcone.herokuapp.com/find", {method: "POST", body: action.data});
        yield put(actions.getFalconeResponse(res));
        yield action.resolve("Success");
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

export function* watchTokenRequest() {
  // Take Last Action Only
  yield takeLatest(actions.TOKEN_REQUEST, tokenRequestSaga);
}

export function* watchFalconRequest() {
  // Take Last Action Only
  yield takeLatest(actions.FIND_FALCONE_REQUEST, findFalconRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchPlanetListRequest),fork(watchVehicleListRequest), fork(watchTokenRequest), fork(watchFalconRequest)]);
}
  
  
