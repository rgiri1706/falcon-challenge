import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
import { apiRoutes, BASE_URL} from '../../utils/constants';  
import * as actions from '../actions/token';
import  { _fetchToken } from '../../api/fetch';

function* tokenRequestSaga(action) {
    try {
        const res = yield call(_fetchToken, `${BASE_URL}${apiRoutes.token}`, {method: "POST"});
        yield put(actions.getTokenSuccess(res.token));
    } catch (error) {
          console.log(error);
    }
}

export function* watchTokenRequest() {
  yield takeLatest(actions.TOKEN_REQUEST, tokenRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchTokenRequest)]);
}