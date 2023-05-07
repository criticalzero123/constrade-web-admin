export const getCommunityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_COMMUNITY_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_COMMUNITY_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_COMMUNITY_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_COMMUNITY_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const getCommunityPostReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_COMMUNITY_POST_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_COMMUNITY_POST_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_COMMUNITY_POST_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_COMMUNITY_POST_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const getCommunityPostCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_COMMUNITY_POST_COMMENT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_COMMUNITY_POST_COMMENT_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_COMMUNITY_POST_COMMENT_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_COMMUNITY_POST_COMMENT_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
