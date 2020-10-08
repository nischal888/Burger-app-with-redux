import ActionTypes from "./constants";

export const fetchOrder = () => {
  return {
    type: ActionTypes.FETCH_ORDER,
  };
};

export const fetchOrderSuccess = (payload) => {
  return {
    type: ActionTypes.FETCH_ORDER_SUCCESS,
    payload,
  };
};
