import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ProductReview = ({ review }) => {
  const { img, userName, body, rating } = review;
  return (
    <div className="card w-full bg-base-100 shadow-xl mt-10">
      
      <div className="card-body">
        <div className="flex">
          <img
            src={img ? img : <FaUserCircle />}
            alt="User Profile Pic"
            className="rounded-xl w-12 h-12 mr-6"
          />
          <h2 className="card-title text-center ">{userName}</h2>
        </div>
        <p className="text-primary">Rating: {rating}</p>
        <p>{body.length > 50 ? body.slice(0, 100) + "..." : body}</p>
      </div>
    </div>
  );
};

export default ProductReview;
