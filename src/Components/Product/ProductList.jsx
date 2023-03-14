import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <div className="flex justify-between gap-3 place-items-center w-full py-3 px-2 border-b-2 border-[rgba(255,255,255,0.15)]">
      <div className="flex gap-2 place-items-center">
        <img
          className="rounded-full h-8 w-8 object-cover"
          src={product.thumbnailUrl}
          alt="User profile"
        />
        <div>
          <p className="text-md capitalize">{product.title}</p>
          <p className="text-xs opacity-80 font-normal uppercase">
            {product.condition}
          </p>
        </div>
      </div>
      <p>{product.description}</p>
      <p>{product.platform}</p>
      <p className="text-sm opacity-80 font-normal">
        {new Date(product.dateCreated).toLocaleDateString()}
      </p>
      {product.productStatus === "sold" && (
        <Link to={`${product.productId}/transaction`}>See Transaction</Link>
      )}
      <p>{product.productStatus}</p>
    </div>
  );
};

export default ProductList;
