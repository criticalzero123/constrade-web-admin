import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import {
  getAllUserReducer,
  changeUserStatusReducer,
  blockUserReducer,
  getReviewsReducer,
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
  getCommunityPostCommentReducer,
  getCommunityPostReducer,
} from "./reducer/communityReducer";

import {
  productDeleteReducer,
  getProductsReducer,
  getTransactionProductReducer,
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

import { getSubscriptionHistoryReducer } from "./reducer/subscriptionReducer";

import { getAllVerificationRequestReducer } from "./reducer/verificationReducer";

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
  getSubscriptionHistoryReducer,
  getCommunityPostCommentReducer,
  getCommunityPostReducer,
  getReviewsReducer,
  getTransactionProductReducer,
  getAllVerificationRequestReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
  // other store enhancers if any
);

export default store;
