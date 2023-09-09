import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { IMG_URL } from "../utils/constant";

const ProductCard = ({ data }) => {
  // console.log(data);
  return (
    <Link
      to="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer w-full sm:w-64 sm:rounded-2xl place-self-start flex sm:flex-col"
    >
      <img
        src={`${
          data?.info?.ownImageUrl
            ? data?.info?.cloudinaryImageId
            : IMG_URL + data?.info?.cloudinaryImageId
        }`}
        alt="Product"
        className="rounded-2xl min-w-[8rem] max-w-[8rem] sm:max-w-full h-32 sm:h-64"
      />
      <div className="p-4 text-black/[0.9] truncate">
        <h2 className="font-medium text-lg truncate capitalize">
          {data?.info?.name}
        </h2>
        <div className="flex items-center text-black/[0.5] justify-between">
          <p className="mr-2 font-semibold">{data?.info?.costForTwo}</p>

          <>
            {/* <p className="text-base  font-medium line-through">&#8377; 5000</p> */}
            <p className=" text-base font-medium text-green-500 flex items-center gap-2">
              <AiFillStar /> {data?.info?.avgRating}
            </p>
          </>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
