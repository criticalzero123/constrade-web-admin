import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserStatus, getAllUser } from "../../redux/action/userAction";

export const useUsers = () => {
  const dispatch = useDispatch();
  const { data: users } = useSelector((state) => state.getAllUserReducer);
  const { data: changeSuccess, loading } = useSelector(
    (state) => state.changeUserStatusReducer
  );

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    if (changeSuccess === undefined || loading || loading === undefined) return;

    if (changeSuccess) alert("Change successfully");
    else alert("Failed to change!");
  }, [changeSuccess, loading]);

  const changeStatus = (userId, newStatus) => {
    dispatch(changeUserStatus({ userId, newStatus }));
  };

  return { users, changeStatus };
};
