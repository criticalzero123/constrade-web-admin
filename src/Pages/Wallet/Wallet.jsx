import React from "react";
import TableComponent from "../../Components/TableComponent";
import WalletList from "../../Components/Wallet/WalletList";
import { useWallet } from "../../hooks/wallet/useWallet";

const Wallet = () => {
  const [wallets] = useWallet();

  const HeaderTitle = () => {
    return (
      <div className="grid grid-cols-3 py-4 px-2 border-b">
        <p>Wallet ID</p>
        <p>Balance</p>
        <p>History</p>
      </div>
    );
  };

  return (
    <TableComponent
      title={"Wallet"}
      description="Wallet Information"
      headerTitle={<HeaderTitle />}
    >
      <div>
        {wallets &&
          wallets.map((_wallet, index) => (
            <WalletList wallet={_wallet} key={index} />
          ))}
      </div>
    </TableComponent>
  );
};

export default Wallet;
