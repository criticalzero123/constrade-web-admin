import React from "react";
import {
  acceptRequest,
  rejectRequest,
} from "../../redux/action/verificationAction";
import { ValidIdType } from "../../utility/enums";

const VerificationList = ({ request }) => {
  const onAccept = () => {
    if (request.exist) {
      acceptRequest(
        request.requestInfo.validIdRequestId,
        request.requestInfo.userId
      );
    } else {
      alert("This is not existed in government database");
    }
  };

  return (
    <div className="grid grid-cols-8 gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>
        {request.requestInfo.userId} {request.requestInfo.userName}
      </p>
      <p>{request.requestInfo.validIdNumber}</p>
      <p>{ValidIdType[request.requestInfo.validationType]}</p>
      <p className="text-sm opacity-80 font-normal">
        {new Date(request.requestInfo.requestDate).toLocaleDateString()}
      </p>
      <p>{request.requestInfo.status}</p>
      <p>{request.exist ? "Exist" : "Not-Exist"}</p>
      <p className="text-green-500 cursor-pointer" onClick={onAccept}>
        Accept
      </p>
      <p
        className="text-red-500 cursor-pointer"
        onClick={() =>
          rejectRequest(
            request.requestInfo.validIdRequestId,
            request.requestInfo.userId
          )
        }
      >
        Reject
      </p>
    </div>
  );
};

export default VerificationList;
