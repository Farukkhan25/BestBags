import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { getAllProducts } from "../../../api/addProduct";
import Spinner from "../../../Components/Spinner/Spinner";
import ReportedTable from "../../../Components/Table/ReportedTable";

const ReportedItems = () => {
  // const { _id, image, categoryName, report } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((er) => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to Delete this product?"
    );
    if (proceed) {
      fetch(`https://bestbags-server.vercel.app/reportedProducts/${id}`, {
        method: "DELETE",
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem("bestbags-token")}`,
        //   },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Successfully deleted!");
          const remaining = products.filter((pro) => pro._id !== id);
          setProducts(remaining);
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
                        Seller Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-blue-800  md:text-xl  text-left text-sm uppercase font-semibold"
                      >
                        Seller Email
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
                    {products.map((product) => (
                      <ReportedTable
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                      ></ReportedTable>
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

export default ReportedItems;
