import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import  { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopSalesCard from '../../Components/TopSalesCard/TopSalesCard';
import './TopSales.css';

import bag1 from "../../assets/bag_images/banner-purses.jpg";
import bag2 from "../../assets/bag_images/banner-mini-bags.jpg";
import bag3 from "../../assets/bag_images/banner-travel.jpg";
import bag4 from "../../assets/bag_images/banner-totes.jpg";

const TopSales = () => {
    
    const { innerWidth, innerHeight } = window;
    const [topSales, setTopSales] = useState([]);

    useEffect(() => {
      fetch("https://bestbags-server.vercel.app/products")
        .then((res) => res.json())
        .then((data) => setTopSales(data));
    }, []);

    return (
      <div className="flex flex-col h-80 justify-center items-center px-4 md:px-10 text-center my-16 bg-base-100 shadow-xl">
        <h1 className="text-sky-600 text-xl md:text-3xl font-bold">
          Top Sales
        </h1>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="porfolio-slider"
          spaceBetween={{ innerWidth } > 480 ? 30 : 100}
          slidesPerView={innerWidth > 480 ? 3 : 1}
          grabCursor={true}
          loop={true}
        >
          {/* {topSales.map((topSale) => (
            <TopSalesCard key={topSale._id} topSale={topSale}></TopSalesCard>
          ))} */}

          <SwiperSlide>
            <img src={bag1} alt="bag" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bag2} alt="bag" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bag3} alt="bag" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bag4} alt="bag" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default TopSales;