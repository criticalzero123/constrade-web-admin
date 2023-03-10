import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/productAction";

export const useProduct = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getProductsReducer);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return [data];
};
