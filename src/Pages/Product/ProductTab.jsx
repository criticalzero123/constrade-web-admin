import React from "react";
import ProductList from "../../Components/Product/ProductList";
import { useProduct } from "../../hooks/product/useProduct";

const ProductTab = () => {
  const [products] = useProduct();
  return (
    <section className=" text-white font-bold bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.15)] rounded-sm grow">
      {/* Header */}

      <div className="flex justify-between place-items-center p-4 bg-[rgba(255,255,255,0.20)]">
        <div>
          <h3>Products</h3>
          <p className="text-sm opacity-80 font-normal mt-1">
            Products Information
          </p>
        </div>
      </div>

      {/* List contents  */}
      <div>
        {products &&
          products.map((_product, index) => (
            <ProductList product={_product} key={index} />
          ))}
      </div>
    </section>
  );
};

export default ProductTab;
