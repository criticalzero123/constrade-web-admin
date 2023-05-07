export const getAllUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_ALL_USERS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_ALL_USERS_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_ALL_USERS_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const blockUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "BLOCK_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "BLOCK_USER_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "BLOCK_USER_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "BLOCK_USER_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const getReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_REVIEWS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_REVIEWS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_REVIEWS_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_REVIEWS_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
