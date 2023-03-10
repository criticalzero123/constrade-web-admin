import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionHistory } from "../../redux/action/subscriptionAction";

export const useSubscription = (id) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getSubscriptionHistoryReducer);
  useEffect(() => {
    if (id === undefined) return;
    dispatch(getSubscriptionHistory(id));
  }, [id, dispatch]);

  return [data];
};
