import api from "../../utility/api";

export const productDelete = (id, reportId) => async (dispatch) => {
  dispatch({ type: "PRODUCT_DELETE_REQUEST" });
  try {
    const res = await api.delete(`/product/${id}?report=${reportId}`);

    dispatch({
      type: "PRODUCT_DELETE_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "PRODUCT_DELETE_ERROR", error: error });
  }
};

export const getProducts = () => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  try {
    const res = await api.get("/product");

    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_ERROR", error: error });
  }
};

export const getTransactionProduct = (id) => async (dispatch) => {
  dispatch({ type: "GET_TRANSACTION_PRODUCT_REQUEST" });
  try {
    const res = await api.get(`/product/${id}/transaction`);

    dispatch({
      type: "GET_TRANSACTION_PRODUCT_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_TRANSACTION_PRODUCT_ERROR", error: error });
  }
};

export const getBoostedProduct = () => async (dispatch) => {
  dispatch({ type: "GET_BOOSTED_PRODUCT_REQUEST" });
  try {
    const res = await api.get(`/product/boosted`);

    dispatch({
      type: "GET_BOOSTED_PRODUCT_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_BOOSTED_PRODUCT_ERROR", error: error });
  }
};

export const cancelBoostProduct = async (id) => {
  try {
    const res = await api.put(`/product/boosted/${id}/cancel`);

    if (res.data.responseData) {
      alert("Cancelled");
    } else {
      alert("Error in cancelling");
    }
  } catch (error) {
    console.error(error);
  }
};
