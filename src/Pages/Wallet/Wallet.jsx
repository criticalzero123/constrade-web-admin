import React from "react";
import WalletList from "../../Components/Wallet/WalletList";
import { useWallet } from "../../hooks/wallet/useWallet";

const Wallet = () => {
  const [wallets] = useWallet();
  console.log(wallets);
  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}

      <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
        <div>
          <h3>Accounts</h3>
          <p className="text-sm opacity-80 font-normal mt-1">
            Account information
          </p>
        </div>
      </div>

      {/* List contents  */}
      <div>
        {wallets && wallets.map((_wallet) => <WalletList wallet={_wallet} />)}
      </div>
    </section>
  );
};

export default Wallet;
