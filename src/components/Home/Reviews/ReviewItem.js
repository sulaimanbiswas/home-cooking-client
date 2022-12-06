import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ReviewItem = ({ review }) => {
  const { userName, rating, body, img } = review;
  return (
    <div id={`review${review._id}`} className="carousel-item">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img ? img : <FaUserCircle />}
            alt="User Profile Pic"
            className="rounded-xl w-20 h-w-20"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center ">{userName}</h2>
          <p className="text-primary">Rating: {rating}</p>
          <p>{body.length > 50 ? body.slice(0, 100) + "..." : body}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
