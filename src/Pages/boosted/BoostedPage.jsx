import React from "react";
import BoostedList from "../../Components/boosted/BoostedList";
import TableComponent from "../../Components/TableComponent";
import { useBoostProduct } from "../../hooks/boosted/useBoostProduct";

const BoostedPage = () => {
  const [products, onCancel] = useBoostProduct();

  const HeaderTitle = () => {
    return (
      <div className="grid grid-cols-6 py-4 px-2 border-b">
        <p>ID No.</p>
        <p>Boost Duration</p>
        <p>Boost Start</p>
        <p>Boost end</p>
        <p>Status</p>
        <p>Action</p>
      </div>
    );
  };

  return (
    <TableComponent
      title={"Boosted Product"}
      description="Boosted Product Information"
      headerTitle={<HeaderTitle />}
    >
      <div>
        {products &&
          (products.length === 0 ? (
            <p>No boosted Items</p>
          ) : (
            products.map((_product, index) => (
              <BoostedList product={_product} key={index} onCancel={onCancel} />
            ))
          ))}
      </div>
    </TableComponent>
  );
};

export default BoostedPage;
