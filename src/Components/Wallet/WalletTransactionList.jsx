import React from "react";

const WalletTransactionList = ({ data, walletId }) => {
  return (
    <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>{walletId}</p>
      <p>
        {walletId != data.senderWalletId
          ? data.senderWalletId
          : data.receiverWalletId}
      </p>
      <p>{data.amount}</p>
      <p>{walletId == data.senderWalletId ? "sends money" : "receive money"}</p>
      <p>{new Date(data.dateSend).toLocaleDateString()}</p>
    </div>
  );
};

export default WalletTransactionList;
