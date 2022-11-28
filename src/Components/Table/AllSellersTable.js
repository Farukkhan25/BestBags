import React from 'react';

const AllSellersTable = ({ user, handleDelete, handleVerify }) => {
    const { email, role, name, _id } = user;
    return (
        <>
        { role === "seller" ?
    <tr key={user._id}>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
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
      </td> */}

      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <label
          onClick={() => handleVerify(_id)}
          htmlFor="confirmation-modal"
          className="btn btn-sm btn-error"
        >
          Verify
        </label>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-sky-200 md:text-xl text-sm">
        <label
          onClick={() => handleDelete(_id)}
          htmlFor="confirmation-modal"
          className="btn btn-sm btn-error"
        >
          Delete
        </label>
      </td>
            </tr>
            :
            ""
        }
        </>
  );
};

export default AllSellersTable;