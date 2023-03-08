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
