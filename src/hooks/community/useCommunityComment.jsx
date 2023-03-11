import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityPostComment } from "../../redux/action/communityAction";

export default function useCommunityPostComment(id) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getCommunityPostCommentReducer);
  useEffect(() => {
    if (id === undefined) return;
    dispatch(getCommunityPostComment(id));
  }, [dispatch, id]);

  return [data];
}
