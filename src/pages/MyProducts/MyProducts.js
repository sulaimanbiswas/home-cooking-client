import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyProductRow from "./MyProductRow";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://home-cooking-server.vercel.app/my-products?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);

  const productDeleteHandle = (id) => {
    const proceed = window.confirm("Are you sure to delete this Product?");
    if (proceed) {
      fetch(`https://home-cooking-server.vercel.app/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((order) => order._id !== id);
            setProducts(remaining);
            toast.success("Product delete successfully");
          }
        });
    }
  };

  const statusUpdateHandle = (id) => {
    fetch(`https://home-cooking-server.vercel.app/product/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = products.filter((order) => order._id !== id);
          const approving = products.find((order) => order._id === id);
          approving.status = "Approved";
          const newOrder = [approving, ...remaining];
          setProducts(newOrder);
          toast.success("Product update successfully");
        }
      });
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label></label>
            </th>
            <th>Picture</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((product) => (
              <MyProductRow
                key={product._id}
                product={product}
                productDeleteHandle={productDeleteHandle}
                statusUpdateHandle={statusUpdateHandle}
              />
            ))
          ) : (
            <div className="">
              <h2>No Products were added</h2>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
