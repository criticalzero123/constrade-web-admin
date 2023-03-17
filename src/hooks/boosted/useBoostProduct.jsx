import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelBoostProduct,
  getBoostedProduct,
} from "../../redux/action/productAction";

export const useBoostProduct = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getBoostedProductReducer);
  useEffect(() => {
    dispatch(getBoostedProduct());
  }, [dispatch]);

  const cancelBoost = (id) => {
    cancelBoostProduct(id);
  };

  return [data, cancelBoost];
};
