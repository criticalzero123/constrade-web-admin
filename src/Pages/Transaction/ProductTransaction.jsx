import React from "react";
import { useParams } from "react-router-dom";
import { useTransaction } from "../../hooks/transaction/useTransaction";

const ProductTransaction = () => {
  const { productid } = useParams();
  const [data] = useTransaction(productid);

  if (data)
    return (
      <div>
        <p>product number: {data.transaction.productId}</p>
        <p>
          Seller: {data.seller.firstName} {data.seller.lastName}
        </p>
        <p>
          Buyer: {data.buyer.firstName} {data.buyer.lastName}
        </p>
        <p>Get Wanted: {data.transaction.getWanted ? "yes" : "no"}</p>
        <p>
          In App Transaction: {data.transaction.inAppTransaction ? "yes" : "no"}
        </p>
        <p>Reviewed: {data.transaction.isReviewed ? "yes" : "no"}</p>
        <p>
          Date transacted:{" "}
          {new Date(data.transaction.dateTransaction).toLocaleDateString()}
        </p>
      </div>
    );
};

export default ProductTransaction;
