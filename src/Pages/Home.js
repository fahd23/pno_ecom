import React from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "./../components/ProductCard";
import ShimmerUI from "../components/ShimmerUI";
import HeroBanner from "../components/HeroBanner";
import { mockData } from "../utils/mockData";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Wrapper className="py-5 lg:py-10">
        <h1 className="text-2xl tracking-tight font-bold">Top Restaurants</h1>
        {mockData && mockData.length === 0 ? (
          <ShimmerUI />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-7 lg:my-14 place-items-center ">
            {mockData?.map((item) => {
              return <ProductCard data={item} key={item?.info.id} />;
            })}
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
