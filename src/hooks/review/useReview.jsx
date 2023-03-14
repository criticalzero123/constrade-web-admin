import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux/action/userAction";

export const useReview = (id) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getReviewsReducer);

  useEffect(() => {
    if (id === undefined) return;

    dispatch(getReviews(id));
  }, [id, dispatch]);

  return [data];
};
