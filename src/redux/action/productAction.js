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
  dispatch({ type: "GET_TRANSACTIO_PRODUCT_REQUEST" });
  try {
    const res = await api.get(`/product/${id}/transaction`);

    dispatch({
      type: "GET_TRANSACTIO_PRODUCT_SUCCESS",
      payload: res.data.responseData,
    });
  } catch (error) {
    dispatch({ type: "GET_TRANSACTIO_PRODUCT_ERROR", error: error });
  }
};
