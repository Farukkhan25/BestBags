import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../../Components/Spinner/Spinner";
import MyProductTable from "../../../Components/Table/MyProductTable";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/myproducts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
    setLoading(false);
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to Delete this product?"
    );
    if (proceed) {
      fetch(`http://localhost:8000/myproducts/${id}`, {
        method: "DELETE",
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem("bestbags-token")}`,
        //   },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Successfully deleted!");
          const remaining = myProducts.filter((pro) => pro._id !== id);
          setMyProducts(remaining);
        });
    }
  };

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
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200 border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                      >
                        Marketing
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
                    {myProducts.map((myProduct) => (
                      <MyProductTable
                        key={myProduct._id}
                        myProduct={myProduct}
                        handleDelete={handleDelete}
                      ></MyProductTable>
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

export default MyProducts;
