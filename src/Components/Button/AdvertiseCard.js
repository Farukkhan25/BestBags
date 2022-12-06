import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AdvertiseCard = ({ advertise }) => {
  const { _id, image, resalePrice, productName, Description } = advertise;
  return (
    <div className="card card-compact lg:w-96 bg-slate-800 mx-1 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              src={image}
              // style={{ height: "300px", width: "400px" }}
              alt=""
              className="w-full h-72 object-fit lg:h-64"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center  text-cyan-400 dark:text-cyan-600">
          {productName}
        </h2>
        <p className="text-gray-200 dark:gray-700 text-justify">
          {Description.substring(0, 100) + " ..."}
        </p>
        <div className="flex justify-between items-center pt-4">
          <div>
            <p className="text-xl text-orange-400 dark:text-orange-600 font-semibold">
              Price: ${resalePrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
