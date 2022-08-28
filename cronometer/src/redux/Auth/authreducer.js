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
  forgot: false,
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
        response: payload,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: true,
        loading: false,
        error: false,
        response: payload,
      };
    }
    case types.SIGNUP_FAILED: {
      return {
        ...state,
        error: true,
        loading: false,
        signup: false,
        response: payload,
      };
    }
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        login: false,
        response: payload,
      };
    }
    case types.LOGIN_SUCCESS: {
      saveLocalData("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        login: true,
        response: { ...payload },
      };
    }
    case types.LOGIN_FAILED: {
      return {
        ...state,
        error: true,
        loading: false,
        login: false,
        response: { ...payload },
      };
    }

    case types.FORGOT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        forgot: false,
        response: { ...payload },
      };
    }
    case types.FORGOT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        forgot: true,
        response: { ...payload },
      };
    }
    case types.FORGOT_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false,
        forgot: false,
        response: { ...payload },
      };
    }

    default:
      return state;
  }
};

export default authreducer;
