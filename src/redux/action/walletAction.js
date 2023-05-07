import api from "../../utility/api";

export const getAllWallet = async () => {
  try {
    const res = await api.get("/wallet");
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getWalletTransaction = async (id) => {
  try {
    const res = await api.get(`/wallet/${id}`);
    return res.data.responseData;
  } catch (error) {
    console.log(error);
  }
};
