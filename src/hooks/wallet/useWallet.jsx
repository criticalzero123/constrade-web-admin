import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWallet } from "../../redux/action/walletAction";

export const useWallet = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllWalletReducer);

  useEffect(() => {
    dispatch(getAllWallet());
  }, [dispatch]);

  return [data];
};
