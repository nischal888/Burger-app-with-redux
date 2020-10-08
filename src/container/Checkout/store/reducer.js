import ActionTypes from "./constants";
const initialState = {
  order: [],
  orderConfirm: false,
};

const orderIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ORDER_CONFIRM:
      return {
        ...state,
        orderConfirm: false,
      };
    case ActionTypes.ORDER_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.id.name,
      };
      return {
        ...state,
        orderConfirm: true,
        order: state.order.concat(newOrder),
      };
    default:
      return state;
  }
};

export default orderIngredientsReducer;
