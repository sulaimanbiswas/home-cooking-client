import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://home-cooking-server.vercel.app/product3")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <div className="text-center flex flex-col gap-1">
          <p className="text-2xl">Popular Menu</p>
          <h4 className="text-3xl font-semibold">
            Some Popular Delicious Foods
          </h4>
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
      <div className="flex justify-center">
        <Link to="/menu" className="btn btn-primary">
          View All menus
        </Link>
      </div>
    </div>
  );
};

export default Products;
