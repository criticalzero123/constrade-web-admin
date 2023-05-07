import React from "react";
import { Link } from "react-router-dom";

const WalletList = ({ wallet }) => {
  return (
    <div className="grid grid-cols-3 w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>{wallet.userId}</p>
      <p>{wallet.balance}</p>
      <Link to={`${wallet.walletId}/transaction`}>See Transaction History</Link>
    </div>
  );
};

export default WalletList;
