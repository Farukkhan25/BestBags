import React, { useEffect, useState } from "react";
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

  return (
    <section>
      <div className="grid gap-6 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between py-16 ">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productInfo={product}
            setConfirmProduct={setConfirmProduct}
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
