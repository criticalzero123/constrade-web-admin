import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import {
  getAllUserReducer,
  changeUserStatusReducer,
  blockUserReducer,
} from "./reducer/userReducer";

import {
  getAllReportReducer,
  cancelReportReducer,
} from "./reducer/reportReducer";

import {
  communityDeleteReducer,
  communityPostDeleteReducer,
  communityPostCommentDeleteReducer,
  getCommunityReducer,
} from "./reducer/communityReducer";

import {
  productDeleteReducer,
  getProductsReducer,
} from "./reducer/productReducer";

import {
  getFeedbacksReducer,
  getBugsReducer,
  doneFeedbackReducer,
} from "./reducer/systemReducer";

import {
  getAllWalletReducer,
  getWalletTransactionReducer,
} from "./reducer/walletReducer";

const finalReducer = combineReducers({
  getAllUserReducer,
  changeUserStatusReducer,
  getAllReportReducer,
  communityDeleteReducer,
  communityPostDeleteReducer,
  communityPostCommentDeleteReducer,
  productDeleteReducer,
  blockUserReducer,
  cancelReportReducer,
  getFeedbacksReducer,
  getBugsReducer,
  doneFeedbackReducer,
  getAllWalletReducer,
  getCommunityReducer,
  getProductsReducer,
  getWalletTransactionReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
  // other store enhancers if any
);

export default store;
