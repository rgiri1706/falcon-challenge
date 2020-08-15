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
  //   show loader from somewhere
    try {
        const res = yield call(_fetchToken, `${BASE_URL}${apiRoutes.token}`, {method: "POST"});
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

export function* watchTokenRequest() {
  // Take Last Action Only
  yield takeLatest(actions.TOKEN_REQUEST, tokenRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchTokenRequest)]);
}