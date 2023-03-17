import React from "react";
import BoostedList from "../../Components/boosted/BoostedList";
import TableComponent from "../../Components/TableComponent";
import { useBoostProduct } from "../../hooks/boosted/useBoostProduct";

const BoostedPage = () => {
  const [products, onCancel] = useBoostProduct();

  console.log(products);
  return (
    <TableComponent
      title={"Boosted Product"}
      description="Boosted Product Information"
    >
      <div>
        {products &&
          products.map((_product, index) => (
            <BoostedList product={_product} key={index} onCancel={onCancel} />
          ))}
      </div>
    </TableComponent>
  );
};

export default BoostedPage;
