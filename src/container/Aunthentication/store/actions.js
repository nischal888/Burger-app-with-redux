import ActionTypes from "./constants";

export const authenticateUser = (payload, isSignUp) => {
  return {
    type: ActionTypes.AUTHENTICATE_USER,
    payload,
    isSignUp,
  };
};

export const authenticateUserSuccess = (payload) => {
  return {
    type: ActionTypes.AUTHENTICATE_USER_SUCCESS,
    payload,
  };
};

export const logOut = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};
