import ActionTypes from "./constants";
const initialState = {
  //authData: null,
  tokenId: null,
  expiration: "",
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        //authData: action.payload,
        tokenId: action.tokenId,
        expiration: action.expiration,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        tokenId: null,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
