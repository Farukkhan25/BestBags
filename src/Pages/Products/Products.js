import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
    const { _id, image, categoryName } = useLoaderData();
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:8000/products/${_id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [_id]);

    return (
        <div className="grid gap-6 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between py-16 ">
            {
                products.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))
            }
      </div>
    );
};

export default Products;