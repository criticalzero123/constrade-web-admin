export const getAllWalletReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_WALLET_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_ALL_WALLET_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_ALL_WALLET_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_ALL_WALLET_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
