import ActionTypes from "./constants";

export const fetchOrder = (tokenId) => {
  return {
    type: ActionTypes.FETCH_ORDER,
    tokenId,
  };
};

export const fetchOrderSuccess = (payload) => {
  return {
    type: ActionTypes.FETCH_ORDER_SUCCESS,
    payload,
  };
};
