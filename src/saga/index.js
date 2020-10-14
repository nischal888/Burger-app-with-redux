import { all } from "redux-saga/effects";
import initIngredientsSaga from "../container/BurgerBuilder/saga";
import orderIngredientsSaga from "../container/Checkout/saga";
import fetchOrderSaga from "../container/OrderDetails/saga";
import authenticateUserSaga from "../container/Aunthentication/saga";

export function* rootSaga() {
  yield all([
    ...initIngredientsSaga,
    ...orderIngredientsSaga,
    ...fetchOrderSaga,
    ...authenticateUserSaga,
  ]);
}
