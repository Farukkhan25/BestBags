import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import cate1 from "../../assets/bag_images/banner-backpacks.jpg";
// import cate2 from "../../assets/bag_images/banner-briefcases.jpg";
// import cate3 from "../../assets/bag_images/banner-large-handbags.jpg";
import CategoryCard from '../../Components/CategoryCard/CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
    return (
      <div className="text-center  my-16 bg-base-100 shadow-xl">
        <h3 className="text-sky-600 text-xl md:text-3xl font-bold">
          Categories
        </h3>
        <div className="grid gap-6 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 text-center justify-center">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
            ></CategoryCard>
          ))}
          
        </div>
      </div>
    );
};

export default Categories;