import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as action from "./store/actions";
import * as Apis from "./apis";
import ActionTypes from "./store/constants";

function* initIngredientsSaga() {
  const response = yield call(Apis.initIngredientsApi);
  const data = yield response.json();
  yield put(action.initIngredientsSucceded(data));
}

export default [takeLatest(ActionTypes.INIT_INGRDIENTS, initIngredientsSaga)];
