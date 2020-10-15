import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import * as action from "./store/actions";
import * as Apis from "./apis";
import ActionTypes from "./store/constants";

function* authenticateUserSaga({ payload, isSignUp }) {
  const response = yield call(Apis.authenticateUserApi, payload, isSignUp);
  const data = yield response.json();
  const expirationTime = new Date(new Date().getTime() + data.expiresIn * 1000);
  localStorage.setItem("tokenId", data.idToken);
  localStorage.setItem("expirationTime", expirationTime);
  yield put(action.authenticateUserSuccess(data.idToken, data.expiresIn));
}

function* retainLoginStatus() {
  const token = yield localStorage.getItem("tokenId");
  const expirationDate = yield localStorage.getItem("expirationTime");
  yield put(action.authenticateUserSuccess(token, expirationDate));
}

export default [
  takeLatest(ActionTypes.AUTHENTICATE_USER, authenticateUserSaga),
  takeEvery(ActionTypes.TOKEN_STATUS, retainLoginStatus),
];
