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

export const changeUserStatus = (info) => async (dispatch) => {
  dispatch({ type: "CHANGE_USER_STATUS_REQUEST" });
  try {
    const res = await api.put(`/users/status`, info);
    dispatch({
      type: "CHANGE_USER_STATUS_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "CHANGE_USER_STATUS_ERROR", error: error });
  }
};
