import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
import { apiRoutes, BASE_URL} from '../../utils/constants';  
import * as actions from '../actions/vehicle';
import _fetch from '../../api/fetch';

function* vehicleListRequestSaga(action) {
    try {
        const res = yield call(_fetch, `${BASE_URL}${apiRoutes.vehicles}`);
        yield put(actions.vehicleListSuccess(res));
    } catch (error) {
          console.log(error);
    }
}

export function* watchVehicleListRequest() {
  yield takeLatest(actions.VEHICLE_REQUEST, vehicleListRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchVehicleListRequest)]);
}