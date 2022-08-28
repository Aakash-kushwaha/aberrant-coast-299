import axios from "axios";
import * as types from "./actionType";

export const SignupHandler = (user_data) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });

  axios
    .post("http://localhost:8080/signup", user_data)
    .then((r) => dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.SIGNUP_FAILED, payload: e.data }));
};

export const LoginHandler = (user_data) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  axios
    .post("http://localhost:8080/login", user_data)
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILED, payload: e.data }));
};
