import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunity } from "../../redux/action/communityAction";

export default function useCommunity() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getCommunityReducer);
  useEffect(() => {
    dispatch(getCommunity());
  }, [dispatch]);

  return [data];
}
