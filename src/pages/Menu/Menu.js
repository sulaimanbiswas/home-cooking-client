import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../../components/Products/ProductItem";

const Menu = () => {
  const products = useLoaderData();
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <div className="text-center flex flex-col gap-1">
          <h4 className="text-3xl font-semibold">My Productive All Menu</h4>
          <p className="mt-5">
            Objectively pontificate quality models before intuitive information.{" "}
            <br />
            Dramatically recaptiualize multifunctional materials.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
