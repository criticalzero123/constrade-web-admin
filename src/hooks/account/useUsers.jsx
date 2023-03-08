import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/action/userAction";

export const useUsers = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllUserReducer);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return [data];
};
