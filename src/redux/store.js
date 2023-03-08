import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import {
  getAllUserReducer,
  changeUserStatusReducer,
} from "./reducer/userReducer";

const finalReducer = combineReducers({
  getAllUserReducer,
  changeUserStatusReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
  // other store enhancers if any
);

export default store;
