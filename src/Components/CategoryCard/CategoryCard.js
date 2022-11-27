import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, image, categoryName } = category;
    // console.log(categoryName);
    return (
      <div>
        <Link to={`/categories/${_id}`}>
          <div className="card card-compact w-96  text-center">
            <figure className="h-56">
              <div className="avatar">
                <div className="h-52 w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={image}
                    alt=""
                    // className="w-full h-72 object-fit lg:h-64"
                  />
                </div>
              </div>
            </figure>
            <div className="card-body text-center mx-auto">
              <h2 className="card-title">{categoryName}</h2>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default CategoryCard;