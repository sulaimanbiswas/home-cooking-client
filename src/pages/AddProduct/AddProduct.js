import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const nameRef = useRef();
  const linkRef = useRef();
  const priceRef = useRef();
  const ratingRef = useRef();
  const descriptionRef = useRef();

  const addProductHandle = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const link = linkRef.current.value;
    const price = priceRef.current.value;
    const rating = ratingRef.current.value;
    const body = descriptionRef.current.value;

    const product = {
      img: link,
      name,
      body,
      price,
      rating,
      email: user?.email,
    };

    fetch("https://home-cooking-server.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          event.target.reset();
          toast.success("Order placed successfully");
        }
      });
  };

  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body">
          <div className="text-center">
            <h2 className="card-title">Add Product</h2>
          </div>
          <div className="">
            <form onSubmit={addProductHandle} className="flex w-full">
              <div className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Product Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Picture Link</span>
                  </label>
                  <input
                    ref={linkRef}
                    type="text"
                    placeholder="Product Picture Link"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    ref={priceRef}
                    type="text"
                    placeholder="Price"
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
                  <button className="btn btn-primary">Add Product</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
