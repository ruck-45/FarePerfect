import React from "react";
import FreeService from "./FreeService";
import Dinner from "./Dinner";
import Describe from "./Describe";

const Head = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[4rem] h-auto w-auto bg-white">
      <div className=" lg:py-[4rem] py-[0rem]">
        <div>
          <h3 className="font-serif font-bold text-1xl text-center ">FarePerfect Experience</h3>
        </div>
        <div className="py-[1rem]">
          <h1 className="font-serif font-bold md:text-5xl text-3xl text-center ">
            FarePerfect <span className="text-yellow-400">Premium </span>Select
          </h1>
        </div>
      </div>
      <FreeService />
      <Describe />
      <Dinner />
    </div>
  );
};

export default Head;
