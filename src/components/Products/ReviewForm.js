import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewForm = ({ product }) => {
  const { user } = useContext(AuthContext);
  const nameRef = useRef();
  const linkRef = useRef();
  const ratingRef = useRef();
  const descriptionRef = useRef();

  const { _id, name } = product;

  const reviewProductHandle = (event) => {
    event.preventDefault();
    const userName = nameRef.current.value;
    const link = linkRef.current.value;
    const rating = ratingRef.current.value;
    const body = descriptionRef.current.value;

    const review = {
      id: _id,
      productName: name,
      img: link,
      userName,
      body,
      rating,
      email: user?.email,
    };
    fetch("https://home-cooking-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          event.target.reset();
          toast.success("Review added successfully");
        }
      });
  };
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <div className="text-center">
          <h2 className="card-title">Review This Product</h2>
        </div>
        <div className="">
          <form onSubmit={reviewProductHandle} className="flex w-full">
            <div className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Picture Link</span>
                </label>
                <input
                  ref={linkRef}
                  type="text"
                  defaultValue={user?.photoURL}
                  placeholder="Your Picture Link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  ref={ratingRef}
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Description</span>
                </label>
                <textarea
                  ref={descriptionRef}
                  className="textarea textarea-bordered"
                  placeholder="Description"
                  required
                ></textarea>
              </div>
              <div className="text-center mt-8">
                <button className="btn btn-primary">Add Review</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
