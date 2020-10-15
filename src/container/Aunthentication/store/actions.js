import ActionTypes from "./constants";

export const authenticateUser = (payload, isSignUp) => {
  return {
    type: ActionTypes.AUTHENTICATE_USER,
    payload,
    isSignUp,
  };
};

export const authenticateUserSuccess = (tokenId, expiration) => {
  return {
    type: ActionTypes.AUTHENTICATE_USER_SUCCESS,
    tokenId,
    expiration,
  };
};

export const logOut = () => {
  localStorage.removeItem("tokenId");
  localStorage.removeItem("expirationTime");
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};

export const retainLoginStatus = () => {
  return {
    type: ActionTypes.TOKEN_STATUS,
  };
};
