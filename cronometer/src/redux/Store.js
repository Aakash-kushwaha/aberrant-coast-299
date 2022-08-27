import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import userreducer from "./User/userreducer";
import authreducer from "./Auth/authreducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  userreducer,
  authreducer,
});

export const store = legacy_createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(thunk))
);
