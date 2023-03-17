import React from "react";

const BoostedList = ({ product, onCancel }) => {
  return (
    <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <p>{product.boostProductId}</p>
      <p>Day Boosted:{product.daysBoosted}</p>
      <p>DateBoosted:{new Date(product.dateBoosted).toLocaleDateString()}</p>
      <p>Expires:{new Date(product.dateTimeExpired).toLocaleDateString()}</p>
      <p>{product.status}</p>
      <p
        className="text-red-500 cursor-pointer"
        onClick={() => onCancel(product.boostProductId)}
      >
        Cancel
      </p>
    </div>
  );
};

export default BoostedList;
