import React from "react";

const MyProductRow = ({ product, productDeleteHandle, statusUpdateHandle }) => {
  const { _id, img, name, price, rating, status } = product;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => productDeleteHandle(_id)}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <th>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </th>
      <td>
        <div>
          <div className="font-bold">{name}</div>
        </div>
      </td>
      <td>Price: {price}</td>
      <td>Rating: {rating}</td>
      <th>
        <button
          onClick={() => statusUpdateHandle(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default MyProductRow;
