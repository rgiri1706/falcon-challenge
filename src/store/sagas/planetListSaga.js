import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
import { apiRoutes, BASE_URL} from '../../utils/constants';  
import * as actions from '../actions/planets';
import _fetch from '../../api/fetch';

function* planetListRequestSaga(action) {
      try {
          const res = yield call(_fetch, `${BASE_URL}${apiRoutes.planets}`);
          yield put(actions.planetListSuccess(res));
      } catch (error) {
            console.log(error);
      }
}

export function* watchPlanetListRequest() {
    yield takeLatest(actions.PLANETS_REQUEST, planetListRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchPlanetListRequest)]);
}
  
  
