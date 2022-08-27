import * as types from "./actionType";

const initialdata = {
  token: "",
  id: null,
  data: null,
  error: false,
  loading: false,
  signup: false,
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
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.LOGIN_FAILED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default authreducer;
