import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://home-cooking-server.vercel.app/review5")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="carousel carousel-center max-full p-4  space-x-4 bg-neutral rounded-box">
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {reviews.map((review) => (
          <a
            key={review._id}
            href={`#review${review._id}`}
            className="btn btn-xs"
          >
            {reviews.indexOf(review) + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
