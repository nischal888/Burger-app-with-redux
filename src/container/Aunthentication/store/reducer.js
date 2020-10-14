import ActionTypes from "./constants";
const initialState = {
  authData: null,
  tokenId: null,
  expiration: "",
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE_USER_SUCCESS:
      const { idToken, expiresIn } = action.payload;
      console.log(idToken);
      return {
        ...state,
        authData: action.payload,
        tokenId: idToken,
        expiration: expiresIn,
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
