import ActionTypes from "./constants";

const initialState = {
  fetchedOrders: null,
};

const fetchOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        fetchedOrders: action.payload,
      };
    default:
      return state;
  }
};

export default fetchOrderReducer;
