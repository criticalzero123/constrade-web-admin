import React from "react";

const WalletList = ({ wallet }) => {
  return (
    <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>{wallet.userId}</p>
      <p>{wallet.balance}</p>
    </div>
  );
};

export default WalletList;
