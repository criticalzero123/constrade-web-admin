import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityPost } from "../../redux/action/communityAction";

export default function useCommunityPost(id) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getCommunityPostReducer);
  useEffect(() => {
    if (id === undefined) return;
    dispatch(getCommunityPost(id));
  }, [dispatch, id]);

  return [data];
}
