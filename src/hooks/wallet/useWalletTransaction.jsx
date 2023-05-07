import { useEffect, useState } from "react";
import { getWalletTransaction } from "../../redux/action/walletAction";

export const useWalletTransaction = (id) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (id === undefined) return;
    const fetch = async () => {
      const res = await getWalletTransaction(id);

      const tempList = [...res.money, ...res.other]
        .sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        })
        .reverse();
      setData(tempList);
    };
    fetch();
  }, [id]);

  return [data];
};
