import { FingerPrintIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <NavLink
        to="all-sellers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${
            isActive ? "bg-gray-300" : "bg-gray-100"
          }`
        }
      >
        <UserGroupIcon className="w-5 h-5" />
        <span className="mx-4 font-medium">All Sellers</span>
      </NavLink>

      <NavLink
        to="all-buyers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${
            isActive ? "bg-gray-300" : "bg-gray-100"
          }`
        }
      >
        <UserGroupIcon className="w-5 h-5" />
        <span className="mx-4 font-medium">All Buyers</span>
      </NavLink>

      <NavLink
        to="reported-items"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${
            isActive ? "bg-gray-300" : "bg-gray-100"
          }`
        }
      >
        <FingerPrintIcon className="w-5 h-5" />
        <span className="mx-4 font-medium">Reported Items</span>
      </NavLink>
    </div>
  );
};

export default AdminMenu;
