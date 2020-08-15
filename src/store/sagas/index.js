import { all, fork } from "redux-saga/effects"; // Imports: Redux Sagas
import planetListSaga from "./planetListSaga.js";
import vehicleListSaga from "./vehicleListSaga.js";
import tokenSaga from "./tokenSaga.js";
import findFalconSaga from "./findFalconSaga.js";

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
   fork(planetListSaga),
   fork(vehicleListSaga),
   fork(tokenSaga),
   fork(findFalconSaga)
  ]);
}
