import React from "react";
import Advertise from "../../Components/Advertise/Advertise";
import Banner from "./Banner";
import Categories from "./Categories";
import TopSales from "./TopSales";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <TopSales></TopSales>
      <Advertise></Advertise>
    </div>
  );
};

export default Home;
