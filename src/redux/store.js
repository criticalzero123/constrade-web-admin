import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import { getAllUserReducer, getReviewsReducer } from "./reducer/userReducer";
import {
  getCommunityReducer,
  getCommunityPostCommentReducer,
  getCommunityPostReducer,
} from "./reducer/communityReducer";

import {
  getProductsReducer,
  getTransactionProductReducer,
  getBoostedProductReducer,
} from "./reducer/productReducer";

import {
  getFeedbacksReducer,
  getBugsReducer,
  doneFeedbackReducer,
} from "./reducer/systemReducer";

import { getSubscriptionHistoryReducer } from "./reducer/subscriptionReducer";

import { getAllVerificationRequestReducer } from "./reducer/verificationReducer";

const finalReducer = combineReducers({
  getAllUserReducer,
  getFeedbacksReducer,
  getBugsReducer,
  doneFeedbackReducer,
  getCommunityReducer,
  getProductsReducer,
  getSubscriptionHistoryReducer,
  getCommunityPostCommentReducer,
  getCommunityPostReducer,
  getReviewsReducer,
  getTransactionProductReducer,
  getAllVerificationRequestReducer,
  getBoostedProductReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
  // other store enhancers if any
);

export default store;
