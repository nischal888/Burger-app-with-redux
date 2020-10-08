import { all } from "redux-saga/effects";
import initIngredientsSaga from "../container/BurgerBuilder/saga";
import orderIngredientsSaga from "../container/Checkout/saga";
import fetchOrderSaga from "../container/OrderDetails/saga";

export function* rootSaga() {
  yield all([
    ...initIngredientsSaga,
    ...orderIngredientsSaga,
    ...fetchOrderSaga,
  ]);
}
