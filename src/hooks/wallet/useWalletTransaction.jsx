import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWalletTransaction } from "../../redux/action/walletAction";

export const useWalletTransaction = (id) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getWalletTransactionReducer);

  useEffect(() => {
    if (id === undefined) return;
    dispatch(getWalletTransaction(id));
  }, [dispatch, id]);

  return [data];
};
