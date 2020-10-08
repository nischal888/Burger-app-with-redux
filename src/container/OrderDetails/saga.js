import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import ActionTypes from "./store/constants";
import * as Apis from "./apis";
import * as action from "./store/action";

function* fetchOrderSaga() {
  const response = yield call(Apis.fetchOrderApi);
  const data = yield response.json();
  const refinedOrders = [];
  for (let prop in data) {
    refinedOrders.push({
      ...data[prop],
      id: prop,
    });
  }
  console.log(refinedOrders);
  yield put(action.fetchOrderSuccess(refinedOrders));
}

export default [takeEvery(ActionTypes.FETCH_ORDER, fetchOrderSaga)];
