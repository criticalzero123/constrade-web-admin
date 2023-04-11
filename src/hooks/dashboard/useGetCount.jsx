import { useEffect, useState } from "react";
import { getAllCount } from "../../redux/action/dashboardAction";

const useGetCount = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const result = await getAllCount();

      setData(result);
    };

    fetch();
  }, []);

  return [data];
};

export default useGetCount;
