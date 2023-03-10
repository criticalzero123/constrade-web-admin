import api from "../../utility/api";

export const getAllReport = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_REPORTS_REQUEST" });
  try {
    const res = await api.get("/report");
    dispatch({
      type: "GET_ALL_REPORTS_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_ALL_REPORTS_FAILED", error: error });
  }
};

export const cancelReport = (id) => async (dispatch) => {
  dispatch({ type: "CANCEL_REPORT_REQUEST" });
  try {
    const res = await api.delete(`/report/${id}`);
    dispatch({
      type: "CANCEL_REPORT_SUCCESS",
      payload: res.data.responseData,
    });

    if (res.data.responseData) {
      alert("removed");
    } else {
      alert("something went wrong");
    }
  } catch (error) {
    dispatch({ type: "CANCEL_REPORT_FAILED", error: error });
  }
};
