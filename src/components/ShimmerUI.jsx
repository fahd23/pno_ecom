import React from "react";
import Wrapper from "./Wrapper.jsx";

const ShimmerUI = () => {
  return (
    <Wrapper className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
        <div className="w-64 h-64 bg-slate-300 rounded-3xl"></div>
      </div>
    </Wrapper>
  );
};

export default ShimmerUI;
