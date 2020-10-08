//import ActionTypes from "./constants";
import ActionTypes from "./constants";
const initialState = {
  ingredients: null,
  totalPrice: 3,
};
const priceIncrements = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 1,
  meat: 1.8,
};

const initIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_INGRDIENTS_SUCCEDED:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 3,
      };
    case ActionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + priceIncrements[action.ingredientName],
      };
    case ActionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - priceIncrements[action.ingredientName],
      };
    default:
      // need this for default case
      return state;
  }
};

export default initIngredientsReducer;
