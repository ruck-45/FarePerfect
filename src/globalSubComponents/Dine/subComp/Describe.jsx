import React from "react";
import "./Describe.css"

const Describe = () => {
  return (
    <div>
      <div className=" missionImg h-[25rem] w-[80rem] lg:relative flex items-center justify-center">
        <div className=" md:h-[15rem] md:w-[30rem] w-[20rem] h-auto  bg-white lg:absolute flex items-center justify-center top-[5rem] right-[5rem] ">
          <div className="flex flex-col items-start justify-center p-[2rem]">
            <h1 className="py-[1rem] font-serif font-bold text-black text-1xl">
              <span className="text-yellow-600">ADJUSTABLE</span>{" "} SEATS
            </h1>
            <p className="text-gray-600 font-serif font-normal text-1xl">
              {" "}
              allows passengers to adjust the angle of the seatback for added comfort, especially during longer flights
              or when trying to rest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Describe;
