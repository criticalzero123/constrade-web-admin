import React from "react";
import TableComponent from "../../Components/TableComponent";
import WalletList from "../../Components/Wallet/WalletList";
import { useWallet } from "../../hooks/wallet/useWallet";

const Wallet = () => {
  const [wallets] = useWallet();

  const HeaderTitle = () => {
    return (
      <div className="grid grid-cols-5">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
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
