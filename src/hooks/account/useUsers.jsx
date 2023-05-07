import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserStatus, getAllUser } from "../../redux/action/userAction";

export const useUsers = () => {
  const dispatch = useDispatch();
  const { data: users } = useSelector((state) => state.getAllUserReducer);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const changeStatus = async (userId, newStatus) => {
    const res = await changeUserStatus({ userId, newStatus });

    if (res) {
      alert("Successfully change.");
    } else {
      alert("Not succesfully change");
    }
  };

  return { users, changeStatus };
};
