import api from "../../utility/api";

export const getBugs = () => async (dispatch) => {
  dispatch({ type: "GET_BUGS_REQUEST" });
  try {
    const res = await api.get(`/system/bugs`);
    dispatch({
      type: "GET_BUGS_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_BUGS_ERROR", error: error });
  }
};

export const getFeedbacks = () => async (dispatch) => {
  dispatch({ type: "GET_FEEDBACKS_REQUEST" });
  try {
    const res = await api.get(`/system/feedbacks`);
    dispatch({
      type: "GET_FEEDBACKS_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_FEEDBACKS_ERROR", error: error });
  }
};

export const doneFeedback = (id) => async (dispatch) => {
  dispatch({ type: "MARK_AS_DONE_REQUEST" });

  try {
    const res = await api.put(`/system/${id}`);
    dispatch({
      type: "MARK_AS_DONE_SUCCESS",
      payload: res.data.responseData,
    });

    if (res.data.responseData) {
      alert("Done change");
    } else {
      alert("Not change");
    }
  } catch (error) {
    dispatch({ type: "MARK_AS_DONE_ERROR", error: error });
  }
};
