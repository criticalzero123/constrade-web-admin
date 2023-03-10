export const getSubscriptionHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SUBSCRIPTION_HISTORY_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_SUBSCRIPTION_HISTORY_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_SUBSCRIPTION_HISTORY_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_SUBSCRIPTION_HISTORY_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
