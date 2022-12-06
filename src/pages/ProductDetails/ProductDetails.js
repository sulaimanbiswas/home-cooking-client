import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import ReviewForm from "../../components/Products/ReviewForm";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ProductReview from "./ProductReview";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const { _id, img, name, body, price, rating } = product;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://home-cooking-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 w-full">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between ">
          <span className="">Price: ${price}</span>
          <span className="">Rating: {rating}</span>
        </div>
        <p className="">{body}</p>
      </div>
      {user ? (
        <ReviewForm product={product} />
      ) : (
        <div className="p-5">
          <h2 className="text-center text-red-500">Please Login For Review</h2>
        </div>
      )}
      <div className="p-5">
        <h2 className="text-4xl text-center my-10">All Reviews</h2>
        {reviews.map((review) => (
          <ProductReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
