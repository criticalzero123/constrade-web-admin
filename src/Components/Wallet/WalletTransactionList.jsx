import React from "react";
import { OtherTransactionType } from "../../utility/enums";
const WalletTransactionList = ({ data, walletId }) => {
  const getType = () => {
    switch (data.transactionType) {
      case OtherTransactionType.Boost:
        return "Product Boost";
      case OtherTransactionType.Subscribe:
        return "Subscribe";
      case OtherTransactionType.Topup:
        return "Topup";
      case OtherTransactionType.Refund:
        return "Refund";
      case OtherTransactionType.AddCount:
        return "Add Post Count";
      default:
        return "";
    }
  };

  const WalletTransactionMoney = () => {
    return (
      <>
        {" "}
        <p>{walletId}</p>
        <p>
          {parseInt(walletId) !== data.senderWalletId
            ? data.senderWalletId
            : data.receiverWalletId}
        </p>
        <p>{data.amount}</p>
        <p>
          {parseInt(walletId) === data.senderWalletId
            ? "sends money"
            : "receive money"}
        </p>
        <p>{new Date(data.date).toLocaleDateString()}</p>
      </>
    );
  };

  const WalletTransactionOther = () => {
    return (
      <>
        <p>{walletId}</p>
        <p>{walletId}</p>
        <p>{data.amount}</p>
        <p>{getType()}</p>
        <p>{new Date(data.date).toLocaleDateString()}</p>
      </>
    );
  };

  return (
    <div className="grid grid-cols-5 gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      {data.senderWalletId !== undefined ? (
        <WalletTransactionMoney />
      ) : (
        <WalletTransactionOther />
      )}
    </div>
  );
};

export default WalletTransactionList;
