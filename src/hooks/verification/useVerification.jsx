import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptRequest,
  getAllVerificationRequest,
  rejectRequest,
} from "../../redux/action/verificationAction";

export const useVerification = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state) => state.getAllVerificationRequestReducer
  );
  useEffect(() => {
    dispatch(getAllVerificationRequest());
  }, [dispatch]);

  const onAccept = async (exist, validIdRequestId, userId) => {
    if (exist) {
      const res = await acceptRequest(validIdRequestId, userId);

      if (res) {
        const newData = data.filter(
          (r) => r.requestInfo.validIdRequestId !== validIdRequestId
        );

        dispatch({
          type: "GET_ALL_VERIFICATION_SUCCESS",
          payload: newData,
        });
        alert("accepted!");
      } else {
        alert("Something went wrong in accepting the request.");
      }
    } else {
      alert("This is not existed in government database");
    }
  };

  const declined = async (validIdRequestId, userId) => {
    const res = await rejectRequest(validIdRequestId, userId);

    if (res) {
      const newData = data.filter(
        (r) => r.requestInfo.validIdRequestId !== validIdRequestId
      );

      dispatch({
        type: "GET_ALL_VERIFICATION_SUCCESS",
        payload: newData,
      });
      alert("declined!");
    } else {
      alert("Something went wrong in declining the request.");
    }
  };

  return [data, onAccept, declined];
};
