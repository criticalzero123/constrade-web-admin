import React from "react";
import { useParams } from "react-router-dom";
import { useSubscription } from "../../hooks/account/useSubscription";

const SubscriptionHistory = () => {
  const { userid } = useParams();
  const [data] = useSubscription(userid);

  return (
    <div>
      <p>Current Subscription: {data.newSubscriptionType}</p>
      <p>Since: {new Date(data.newDateStart).toLocaleDateString()}</p>
      <p>Paid: {data.newAmount}</p>
      <br />
      <br />
      <br />
      {data.previousSubscriptionType !== data.newSubscriptionType && (
        <>
          <p>Past Subscription: {data.previousSubscriptionType}</p>
          <p>Since: {new Date(data.previousDateStart).toLocaleDateString()}</p>
          <p>Paid: {data.previousAmount}</p>
        </>
      )}
    </div>
  );
};

export default SubscriptionHistory;
