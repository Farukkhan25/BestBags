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
        <div className="grid gap-6 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-16 text-center">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
            ></CategoryCard>
          ))}
          {/* <Link to="/backpacks">
            <div className="card card-compact w-96  text-center">
              <figure className="h-56">
                <div className="avatar">
                  <div className="h-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={cate1} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body text-center mx-auto">
                <h2 className="card-title">Backpacks</h2>
              </div>
            </div>
          </Link>
          <Link to="/briefcases">
            <div className="card card-compact w-96 ">
              <figure className="h-56">
                <div className="avatar">
                  <div className="h-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={cate2} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">Briefcases</h2>
              </div>
            </div>
          </Link>
          <Link to="/handbags">
            <div className="card card-compact w-96">
              <figure className="h-56">
                <div className="avatar">
                  <div className="h-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={cate3} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">Handbags</h2>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    );
};

export default Categories;