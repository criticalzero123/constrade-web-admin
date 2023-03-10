export const communityDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "COMMUNITY_DELETE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "COMMUNITY_DELETE_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "COMMUNITY_DELETE_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "COMMUNITY_DELETE_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const communityPostDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "COMMUNITY_POST_DELETE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "COMMUNITY_POST_DELETE_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "COMMUNITY_POST_DELETE_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "COMMUNITY_POST_DELETE_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const communityPostCommentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "COMMUNITY_POST_COMMENT_DELETE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "COMMUNITY_POST_COMMENT_DELETE_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "COMMUNITY_POST_COMMENT_DELETE_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "COMMUNITY_POST_COMMENT_DELETE_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

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
