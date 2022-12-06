import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";

const Table = ({ booking, handleDelete }) => {
  const { productName, resalePrice, image, _id, paid } = booking;
  return (
    <tr key={booking._id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt=""
                src={image}
                className="mx-auto object-cover rounded h-12 w-16 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{productName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{resalePrice}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {resalePrice && !paid && (
            <Link to={`/dashboard/payment/${_id}`}>
              <PrimaryButton>Pay Now</PrimaryButton>
            </Link>
          )}
          {resalePrice && paid && <span className="text-green-500">Paid</span>}
        </p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <label
          onClick={() => handleDelete(_id)}
          htmlFor="confirmation-modal"
          className="btn btn-sm btn-error"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default Table;
