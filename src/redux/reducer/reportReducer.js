export const getAllReportReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_REPORTS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_ALL_REPORTS_SUCCESS":
      return {
        data: action.payload,
        loading: false,
      };

    case "GET_ALL_REPORTS_FAILED":
      return {
        error: action.error,
        loading: false,
      };

    case "GET_ALL_REPORTS_LEAVE":
      return {};
    default:
      return { ...state };
  }
};

export const cancelReportReducer = (state = {}, action) => {
  switch (action.type) {
    case "CANCEL_REPORT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "CANCEL_REPORT_SUCCESS":
      return {
        data: action.payload,
        loading: false,
      };

    case "CANCEL_REPORT_FAILED":
      return {
        error: action.error,
        loading: false,
      };

    case "CANCEL_REPORT_LEAVE":
      return {};
    default:
      return { ...state };
  }
};
