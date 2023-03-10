import api from "../../utility/api";

export const getAllWallet = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_WALLET_REQUEST" });
  try {
    const res = await api.get("/wallet");
    dispatch({
      type: "GET_ALL_WALLET_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_ALL_WALLET_ERROR", error: error });
  }
};
