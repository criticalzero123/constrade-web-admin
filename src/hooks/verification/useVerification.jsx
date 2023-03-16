import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVerificationRequest } from "../../redux/action/verificationAction";

export const useVerification = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state) => state.getAllVerificationRequestReducer
  );
  useEffect(() => {
    dispatch(getAllVerificationRequest());
  }, [dispatch]);

  return [data];
};
