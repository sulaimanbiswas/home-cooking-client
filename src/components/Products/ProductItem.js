import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { _id, img, name, body, price, rating } = product;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="">
          {body.length > 100 ? body.slice(0, 100) + "..." : body}
        </p>
        <div className="flex justify-between items-center">
          <p className="">Price: ${price}</p>
          <p className="">Rating: {rating}</p>
          <Link to={`/product/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
