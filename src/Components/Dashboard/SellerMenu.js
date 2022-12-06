import { FingerPrintIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const SellerMenu = () => {
  return (
    <div>
      <NavLink
        to="my-products"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${
            isActive ? "bg-gray-300" : "bg-gray-100"
          }`
        }
      >
        <FingerPrintIcon className="w-5 h-5" />
        <span className="mx-4 font-medium">My Products</span>
      </NavLink>
      <NavLink
        to="add-product"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${
            isActive ? "bg-gray-300" : "bg-gray-100"
          }`
        }
      >
        <UserPlusIcon className="w-5 h-5" />
        <span className="mx-4 font-medium">Add a Product</span>
      </NavLink>
      <NavLink
        to="my-buyers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${
            isActive ? "bg-gray-300" : "bg-gray-100"
          }`
        }
      >
        <UserPlusIcon className="w-5 h-5" />
        <span className="mx-4 font-medium">My Buyers</span>
      </NavLink>
    </div>
  );
};

export default SellerMenu;
