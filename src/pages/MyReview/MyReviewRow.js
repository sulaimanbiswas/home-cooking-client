import React from "react";

const MyReviewRow = ({ review, reviewDeleteHandle }) => {
  const { _id, productName, rating, body } = review;
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => reviewDeleteHandle(_id)} className="btn btn-circle btn-outline">
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

      <td>
        <div>
          <div className="font-bold">{productName}</div>
        </div>
      </td>
      <td className="">{body}</td>
      <td>{rating}</td>
      <th>
        <button onClick={() => {}} className="btn btn-ghost btn-xs">
          Update
        </button>
      </th>
    </tr>
  );
};

export default MyReviewRow;
