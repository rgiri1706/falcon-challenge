import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
import { apiRoutes, BASE_URL} from '../../utils/constants';  
import * as actions from '../actions/find';
import  { _fetchToken } from '../../api/fetch';

function* findFalconRequestSaga(action) {
    try {
        const res = yield call(_fetchToken, `${BASE_URL}${apiRoutes.find}`, {method: "POST", body: action.data});
        yield put(actions.getFalconeResponse(res));
        yield action.resolve("Success");
    } catch (error) {
          console.log(error);
    }
}


export function* watchFalconRequest() {
  yield takeLatest(actions.FIND_FALCONE_REQUEST, findFalconRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchFalconRequest)]);
}