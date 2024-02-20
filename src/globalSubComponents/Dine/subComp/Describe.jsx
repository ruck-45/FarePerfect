import React from "react";
import "./Describe.css";

const Describe = () => {
  return (
    <div>
      <div className=" missionImg h-[25rem] w-[80rem] sm:relative flex items-center justify-center">
        <div className=" lg:h-[15rem] lg:w-[30rem] w-[20rem] md:w-[25rem] h-auto  bg-white sm:absolute flex items-center justify-center sm:top-[5rem] sm:right-[20rem] md:right-[18rem] lg:right-[10rem]  ">
          <div className="flex flex-col items-start justify-center p-[2rem] ">
            <h1 className="py-[1rem]  font-bold text-black text-2xl font-['Kanit']">
              <span className="text-[#0a97b0]">Adjustable</span> Seats
            </h1>
            <p className="text-gray-600  font-normal text-[0.9rem]">
              Allows passengers to adjust the angle of the seatback for added comfort, especially during longer flights
              or when trying to rest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Describe;
