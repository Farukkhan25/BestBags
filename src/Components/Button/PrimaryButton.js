import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`p-2 rounded-lg hover:text-gray-100 hover:bg-purple-500  bg-gradient-to-r from-blue-500 to-sky-500 text-white ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
