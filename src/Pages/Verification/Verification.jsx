import React from "react";
import TableComponent from "../../Components/TableComponent";
import VerificationList from "../../Components/verification/VerificationList";
import { useVerification } from "../../hooks/verification/useVerification";

const Verification = () => {
  const [requests, onAccept, declined] = useVerification();

  const HeaderTitle = () => {
    return (
      <div className="grid grid-cols-8 py-4 px-2 border-b">
        <p>Name</p>
        <p>ID No.</p>
        <p>ID Type</p>
        <p>Date</p>
        <p>Status</p>
        <p>ID Active</p>
        <p>Approve</p>
        <p>Decline</p>
      </div>
    );
  };

  return (
    <TableComponent
      title={"Verification Requests"}
      description={"Account that want to be verified request."}
      headerTitle={<HeaderTitle />}
    >
      <div>
        {requests &&
          (requests.length === 0 ? (
            <p>No Requests</p>
          ) : (
            requests.map((_request, index) => (
              <VerificationList
                request={_request}
                key={index}
                onAccept={onAccept}
                rejectRequest={declined}
              />
            ))
          ))}
      </div>
    </TableComponent>
  );
};

export default Verification;
