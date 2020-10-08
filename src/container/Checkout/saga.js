import * as Apis from "./apis";

import { call, put, takeEvery } from "redux-saga/effects";
import ActionTypes from "./store/constants";
import * as action from "./store/action";

export function* orderIngredientsSaga({ payload }) {
  const response = yield call(Apis.orderIngredientsApi, payload);
  const data = yield response.json();
  yield put(action.orderIngredientsSuccess(data, payload));
}

export default [takeEvery(ActionTypes.ORDER_BURGER, orderIngredientsSaga)];
