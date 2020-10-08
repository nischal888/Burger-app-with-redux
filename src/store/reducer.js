// import ActionTypes from "./actions";

// const initialState = {
//   ingredients: {
//     salad: 0,
//     cheese: 0,
//     bacon: 0,
//     meat: 0,
//   },
//   totalPrice: 4,
// };
// const priceIncrements = {
//   salad: 0.5,
//   bacon: 0.7,
//   cheese: 1,
//   meat: 1.8,
// };

// const reducer = (state = initialState, action) => {
//   console.log("reducer", state);
//   switch (action.type) {
//     case ActionTypes.ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: {
//           ...state.ingredients,
//           [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
//         },
//         totalPrice: state.totalPrice + priceIncrements[action.ingredientName],
//       };
//     case ActionTypes.REMOVE_INGREDIENT:
//       return {
//         ...state,
//         ingredients: {
//           ...state.ingredients,
//           [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
//         },
//         totalPrice: state.totalPrice - priceIncrements[action.ingredientName],
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
