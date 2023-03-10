export const getBugsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BUGS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_BUGS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_BUGS_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_BUGS_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const getFeedbacksReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_FEEDBACKS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_FEEDBACKS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_FEEDBACKS_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_FEEDBACKS_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const doneFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case "MARK_AS_DONE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "MARK_AS_DONE_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "MARK_AS_DONE_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "MARK_AS_DONE_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
