import api from "../../utility/api";

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_USERS_REQUEST" });
  try {
    const res = await api.get("/users");
    dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: res.data.responseData });
  } catch (error) {
    dispatch({ type: "GET_ALL_USERS_ERROR", error: error });
  }
};

export const blockUser = async (id, reportId) => {
  try {
    const res = await api.put(`/users/${id}/block?reportId=${reportId}`);
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const changeUserStatus = async (info) => {
  try {
    const res = await api.put(`/users/status`, info);
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const alertUser = async (id, reportId) => {
  try {
    const res = await api.post(
      `/notification/alert/${id}?reportId=${reportId}`
    );
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = (id) => async (dispatch) => {
  dispatch({ type: "GET_REVIEWS_REQUEST" });
  try {
    const res = await api.get(`/users/${id}/reviews`);
    dispatch({
      type: "GET_REVIEWS_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_REVIEWS_ERROR", error: error });
  }
};
