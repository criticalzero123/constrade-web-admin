import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "../../redux/action/systemAction";

export const useFeedback = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getFeedbacksReducer);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  return [data];
};
