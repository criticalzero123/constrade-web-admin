import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../redux/action/systemAction";

export const useSystemBug = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getBugsReducer);

  useEffect(() => {
    dispatch(getBugs());
  }, [dispatch]);

  return [data];
};
