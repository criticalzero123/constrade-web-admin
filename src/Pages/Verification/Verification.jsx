import React from "react";
import TableComponent from "../../Components/TableComponent";
import VerificationList from "../../Components/verification/VerificationList";
import { useVerification } from "../../hooks/verification/useVerification";

const Verification = () => {
  const [requests] = useVerification();

  return (
    <TableComponent
      title={"Verification Requests"}
      description={"Account that want to be verified request."}
    >
      <div>
        {requests &&
          (requests.length === 0 ? (
            <p>No Requests</p>
          ) : (
            requests.map((_request, index) => (
              <VerificationList request={_request} key={index} />
            ))
          ))}
      </div>
    </TableComponent>
  );
};

export default Verification;
