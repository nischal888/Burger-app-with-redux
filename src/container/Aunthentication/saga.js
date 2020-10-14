import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import * as action from "./store/actions";
import * as Apis from "./apis";
import ActionTypes from "./store/constants";

function* authenticateUserSaga({ payload, isSignUp }) {
  const response = yield call(Apis.authenticateUserApi, payload, isSignUp);
  const data = yield response.json();
  yield put(action.authenticateUserSuccess(data));
}

export default [
  takeLatest(ActionTypes.AUTHENTICATE_USER, authenticateUserSaga),
];
