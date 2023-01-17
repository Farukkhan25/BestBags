import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import BookingModal from "./BookingModal";

const Products = () => {
  const { _id, image, categoryName } = useLoaderData();

  const [products, setProducts] = useState([]);
  const [confirmProduct, setConfirmProduct] = useState(null);

  useEffect(() => {
    fetch(`https://bestbags-server.vercel.app/products/${_id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [_id]);

  const handleReport = async (id) => {
    const res = await fetch(
      `https://bestbags-server.vercel.app/setReport/${id}`,
      {
        method: "PUT",
        header: {
          "content-type": "application/json",
        },
        body: JSON.stringify(id),
      }
    );
    const data = await res.json();
    toast("Product Reported to the Admin Successfully!");
    return data;
  };

  return (
    <section>
      <div className="grid gap-6 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between py-16 px-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productInfo={product}
            setConfirmProduct={setConfirmProduct}
            handleReport={handleReport}
          ></ProductCard>
        ))}
      </div>
      {confirmProduct && (
        <BookingModal confirmProduct={confirmProduct}></BookingModal>
      )}
    </section>
  );
};

export default Products;
