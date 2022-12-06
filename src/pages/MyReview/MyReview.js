import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewRow from "./MyReviewRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://home-cooking-server.vercel.app/my-review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const reviewDeleteHandle = (id) => {
    const proceed = window.confirm("Are you sure to delete this Product?");
    if (proceed) {
      fetch(`https://home-cooking-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
            toast.success("Review delete successfully");
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>
              <label></label>
            </th>
            <th>Product Name</th>
            <th>Body</th>
            <th>Rating</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length === 0 ? (
            reviews.map((review) => (
              <MyReviewRow
                key={review._id}
                review={review}
                reviewDeleteHandle={reviewDeleteHandle}
              />
            ))
          ) : (
            <>
              <h2 className="text-center">No reviews were added</h2>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyReview;
