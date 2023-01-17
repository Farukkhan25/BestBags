import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopSalesCard = ({ topSale }) => {
  const { _id, productName, image } = topSale;
  console.log(image);
  return (
    <div>
      <SwiperSlide>
        <img src={image} alt="" />
      </SwiperSlide>
    </div>
  );
};

export default TopSalesCard;