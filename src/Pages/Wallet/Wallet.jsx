import React from "react";
import TableComponent from "../../Components/TableComponent";
import WalletList from "../../Components/Wallet/WalletList";
import { useWallet } from "../../hooks/wallet/useWallet";

const Wallet = () => {
  const [wallets] = useWallet();
  return (
    <TableComponent title={"Wallet"} description="Wallet Information">
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
