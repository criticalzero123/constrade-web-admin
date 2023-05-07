import { useEffect, useState } from "react";
import { getAllWallet } from "../../redux/action/walletAction";

export const useWallet = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllWallet();
      setData(res);
    };
    fetch();
  }, []);

  return [data];
};
