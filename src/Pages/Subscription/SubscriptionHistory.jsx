import React from "react";
import { useParams } from "react-router-dom";
import { useSubscription } from "../../hooks/account/useSubscription";

const SubscriptionHistory = () => {
  const { userid } = useParams();
  const [data] = useSubscription(userid);

  return (
    <div>
      <p>Current Subscription: {data.newSubscriptionType}</p>
      <p>Since: {data.newDateStart}</p>
      <p>Paid: {data.newAmount}</p>
    </div>
  );
};

export default SubscriptionHistory;
