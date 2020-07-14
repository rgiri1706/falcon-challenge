import { all, fork } from "redux-saga/effects"; // Imports: Redux Sagas
import planetListSaga from "./planetListSaga.js";

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
   fork(planetListSaga)
  ]);
}
