export const getAllVerificationRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_VERIFICATION_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_ALL_VERIFICATION_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_ALL_VERIFICATION_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_ALL_VERIFICATION_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
