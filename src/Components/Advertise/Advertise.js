import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCard from "../Button/AdvertiseCard";

const Advertise = () => {
  const { data: advertises = [] } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () =>
      fetch("https://bestbags-server.vercel.app/advertises").then((res) =>
        res.json()
      ),
    // console.log(advertise.length)
  });

  return (
    <div className="container mx-auto lg:py-16 py-12 lg:px-12 px-4">
      <div className="text-center mb-4">
        <p className="py-4 text-2xl font-bold text-orange-600">
          Customers Choice! (Advertise)
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {advertises.map((advertise) => (
          <AdvertiseCard
            key={advertise._id}
            advertise={advertise}
          ></AdvertiseCard>
        ))}
      </div>
      {/* <div className="text-center">
          <Link to="/allServices">
            <button
              type="button"
              className="btn btn-info px-7 my-8 text-lg font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
            >
              See All
            </button>
          </Link>
        </div> */}
    </div>
  );
};

export default Advertise;
