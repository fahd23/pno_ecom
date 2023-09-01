import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "./../components/ProductCard";
import axios from "axios";
import { API_URL } from "../utils/constant";
import ShimmerUI from "../components/ShimmerUI";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    const data = await response?.data;
    setRestaurantsList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    // console.log(
    //   data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants ||
    //     data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    // );
    // console.log(
    //   data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    // console.log(
    //   data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };

  return (
    <>
      <div className="py-10">
        <HeroBanner />
      </div>
      <Wrapper className="py-10">
        <h1 className="text-2xl tracking-tight font-bold">Top Restaurants</h1>
        {restaurantsList && restaurantsList.length === 0 ? (
          <ShimmerUI />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
            {restaurantsList?.map((item) => {
              return <ProductCard data={item} key={item?.info.id} />;
            })}
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
