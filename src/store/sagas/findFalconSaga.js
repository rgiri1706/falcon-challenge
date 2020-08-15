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
  //   show loader from somewhere
    try {
        const res = yield call(_fetchToken, `${BASE_URL}${apiRoutes.find}`, {method: "POST", body: action.data});
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


export function* watchFalconRequest() {
  // Take Last Action Only
  yield takeLatest(actions.FIND_FALCONE_REQUEST, findFalconRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchFalconRequest)]);
}