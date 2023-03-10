import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReport } from "../../redux/action/reportAction";

export const useReport = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllReportReducer);

  useEffect(() => {
    dispatch(getAllReport());
  }, [dispatch]);

  return [data];
};
