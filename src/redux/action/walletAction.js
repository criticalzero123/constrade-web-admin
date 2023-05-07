import api from "../../utility/api";

export const getAllWallet = async () => {
  try {
    const res = await api.get("/wallet");
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getWalletTransaction = (id) => async (dispatch) => {
  dispatch({ type: "GET_WALLET_TRANSACTION_REQUEST" });
  try {
    const res = await api.get(`/wallet/${id}`);
    dispatch({
      type: "GET_WALLET_TRANSACTION_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_WALLET_TRANSACTION_ERROR", error: error });
  }
};
