import ActionTypes from "./constants";

export const orderIngredients = (payload, tokenId) => {
  return {
    type: ActionTypes.ORDER_BURGER,
    payload,
    tokenId,
  };
};
export const orderIngredientsSuccess = (id, orderData) => {
  console.log(id, orderData);
  return {
    type: ActionTypes.ORDER_BURGER_SUCCESS,
    id,
    orderData,
  };
};
export const OrderConfirm = () => {
  return {
    type: ActionTypes.ORDER_CONFIRM,
  };
};
