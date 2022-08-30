import axios from "axios";
import * as types from "./actionType";

export const SignupHandler = (user_data) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });

  axios
    .post("/signup", user_data)
    .then((r) => dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.SIGNUP_FAILED, payload: e.data }));
};

export const LoginHandler = (user_data) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
 return axios.post("/login", user_data)
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILED, payload: e.data }));
};

export const ForgotPassHandler = (user_data) => (dispatch) => {
  dispatch({ type: types.FORGOT_REQUEST });
  axios
    .patch("/forgotpassword", user_data)
    .then((r) => dispatch({ type: types.FORGOT_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.FORGOT_FAILURE, payload: e.data }));
};
