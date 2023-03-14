import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionProduct } from "../../redux/action/productAction";

export const useTransaction = (id) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getTransactionProductReducer);

  useEffect(() => {
    if (id === undefined) return;

    dispatch(getTransactionProduct(id));
  }, [id, dispatch]);

  return [data];
};
