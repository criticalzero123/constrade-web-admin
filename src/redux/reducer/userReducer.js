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

export const changeUserStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_USER_STATUS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "CHANGE_USER_STATUS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "CHANGE_USER_STATUS_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "CHANGE_USER_STATUS_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
