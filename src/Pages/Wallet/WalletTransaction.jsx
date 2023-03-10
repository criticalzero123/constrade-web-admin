import React from "react";
import { useParams } from "react-router-dom";
import TableComponent from "../../Components/TableComponent";
import WalletTransactionList from "../../Components/Wallet/WalletTransactionList";
import { useWalletTransaction } from "../../hooks/wallet/useWalletTransaction";

const WalletTransaction = () => {
  const { walletid } = useParams();
  const [transactions] = useWalletTransaction(walletid);

  return (
    <div>
      <TableComponent
        title="Wallet Transaction"
        description="User wallet transaction details"
      >
        {transactions &&
          transactions.map((_transaction, index) => (
            <WalletTransactionList
              data={_transaction}
              key={index}
              walletId={walletid}
            />
          ))}
      </TableComponent>
    </div>
  );
};

export default WalletTransaction;
