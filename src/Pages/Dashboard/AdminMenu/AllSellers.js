import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getAllUsers } from '../../../api/user';
import Spinner from '../../../Components/Spinner/Spinner';
import AllSellersTable from '../../../Components/Table/AllSellersTable';

const AllSellers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      getAllUsers()
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((er) => {
          setLoading(false);
        });
    }, []);

    console.log(users)

    const handleVerify = (id) => {};

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure, you want to Delete this Seller?"
        );
        if (proceed) {
            fetch(`http://localhost:8000/users/${id}`, {
                method: "DELETE",
                //   headers: {
                //     authorization: `Bearer ${localStorage.getItem("bestbags-token")}`,
                //   },
            })
                .then((res) => res.json())
                .then((data) => {
                    toast("Successfully deleted!");
                    const remaining = users.filter((pro) => pro._id !== id);
                    setUsers(remaining);
                });
        }
        
    }

        
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
                        {/* <th
                          scope="col"
                          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                        >
                          Image
                        </th> */}
                        <th
                          scope="col"
                          className="px-5 py-3 bg-gray-200 border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                        >
                          Verification
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <AllSellersTable
                          key={user._id}
                          user={user}
                          handleDelete={handleDelete}
                          handleVerify={handleVerify}
                        ></AllSellersTable>
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

export default AllSellers;