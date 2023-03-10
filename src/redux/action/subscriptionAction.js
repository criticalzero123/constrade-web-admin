import api from "../../utility/api";

export const getSubscriptionHistory = (id) => async (dispatch) => {
  dispatch({ type: "GET_SUBSCRIPTION_HISTORY_REQUEST" });
  try {
    const res = await api.get(`/users/${id}/subscription/history`);
    dispatch({
      type: "GET_SUBSCRIPTION_HISTORY_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_SUBSCRIPTION_HISTORY_ERROR", error: error });
  }
};
