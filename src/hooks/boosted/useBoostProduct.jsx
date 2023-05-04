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

  const cancelBoost = async (id) => {
    const res = await cancelBoostProduct(id);

    if (res) {
      const newData = data.filter((p) => p.boostProductId !== id);
      dispatch({
        type: "GET_BOOSTED_PRODUCT_SUCCESS",
        payload: newData,
      });
      alert("Cancel successfully");
    } else {
      alert("Something went wrong in cancelling the boost product.");
    }
  };

  return [data, cancelBoost];
};
