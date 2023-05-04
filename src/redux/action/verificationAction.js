import api from "../../utility/api";

export const getAllVerificationRequest = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_VERIFICATION_REQUEST" });
  try {
    const res = await api.get("/verification");
    dispatch({
      type: "GET_ALL_VERIFICATION_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_ALL_VERIFICATION_FAILED", error: error });
  }
};

export const acceptRequest = async (id, userId) => {
  try {
    const res = await api.put(`/verification/${id}/accept?userId=${userId}`);

    return res.data.responseData;
  } catch (error) {
    console.error(error);
  }
};

export const rejectRequest = async (id, userId) => {
  try {
    const res = await api.put(`/verification/${id}/reject?userId=${userId}`);

    if (res.data.responseData) {
      alert("Rejected");
    } else {
      alert("Something Went wrong in database");
    }
  } catch (error) {
    console.error(error);
  }
};
