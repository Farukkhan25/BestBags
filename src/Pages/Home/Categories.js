import React, { useEffect, useState } from "react";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://bestbags-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="text-center my-16 bg-base-100 shadow-xl">
      <h3 className="text-sky-600 text-xl md:text-3xl font-bold">Categories</h3>
      <div className="grid gap-6 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 text-center justify-center">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
