import { getLocalData, saveLocalData } from "../Utils/localstroage";
import * as types from "./actionType";

const initialdata = {
  token: getLocalData("token") || "",
  id: null,
  data: null,
  error: false,
  loading: false,
  signup: false,
  login: false,
  response: {},
};

const authreducer = (state = initialdata, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        signup: false,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: true,
        loading: false,
        error: false,
        response: { ...state, payload },
      };
    }
    case types.SIGNUP_FAILED: {
      return {
        ...state,
        error: true,
        loading: false,
        signup: false,
      };
    }
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        login: false,
      };
    }
    case types.LOGIN_SUCCESS: {
      saveLocalData("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        login: true,
        response: { ...state, payload },
      };
    }
    case types.LOGIN_FAILED: {
      return {
        ...state,
        error: true,
        loading: false,
        login: false,
      };
    }
    default:
      return state;
  }
};

export default authreducer;
