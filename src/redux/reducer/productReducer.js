export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DELETE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "PRODUCT_DELETE_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "PRODUCT_DELETE_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "PRODUCT_DELETE_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const getProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_PRODUCTS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_PRODUCTS_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_PRODUCTS_LEAVE":
      return {};

    default:
      return { ...state };
  }
};

export const getTransactionProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_TRANSACTION_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_TRANSACTION_PRODUCT_SUCCESS":
      return {
        loading: false,
        data: action.payload,
      };

    case "GET_TRANSACTION_PRODUCT_ERROR":
      return {
        loading: false,
        error: action.error,
      };

    case "GET_TRANSACTION_PRODUCT_LEAVE":
      return {};

    default:
      return { ...state };
  }
};
