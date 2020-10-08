import ActionTypes from "./constants";

export const initIngredients = () => {
  return {
    type: ActionTypes.INIT_INGRDIENTS,
  };
};
export const initIngredientsSucceded = (ingr) => {
  return {
    type: ActionTypes.INIT_INGRDIENTS_SUCCEDED,
    ingredients: ingr,
  };
};

export const addIngredients = (ingrName) => {
  return {
    type: ActionTypes.ADD_INGREDIENT,
    ingredientName: ingrName,
  };
};
export const deleteIngredients = (ingrName) => {
  return {
    type: ActionTypes.REMOVE_INGREDIENT,
    ingredientName: ingrName,
  };
};
