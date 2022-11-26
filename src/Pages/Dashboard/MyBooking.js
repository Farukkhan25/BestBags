import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllBookingsByEmail } from "../../api/bookings";
import Spinner from "../../Components/Spinner/Spinner";
import Table from "../../Components/Table/Table";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";



const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllBookingsByEmail(user?.email)
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  }, [user]);

  console.log(bookings);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800 md:text-xl  text-left text-sm uppercase font-normal"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 md:text-xl  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800 md:text-xl  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800 md:text-xl  text-left text-sm uppercase font-normal"
                      >
                        Payment
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800 md:text-xl  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <Table booking={booking} key={booking._id}></Table>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyBookings;
