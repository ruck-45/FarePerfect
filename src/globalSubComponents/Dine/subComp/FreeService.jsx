import React from "react";

const FreeService = () => {
  return (
    <div className=" flex flex-row items-center justify-center gap-5 md:px-[5rem] px-[2rem] py-[rem] h-auto w-auto  ">
      <div className="px-[2rem] w-[38rem] h-auto md:block hidden ">
        <img
          className="w-[35rem]  "
          src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="py-[2rem]">
        <h2 className="font-bold  text-2xl py-[1rem] font-['Kanit']">
          At The <span className="text-[#0a97b0]">Airport</span>
        </h2>
        <p className="text-gray-600 text-[0.9rem]">
          Access to separate check-in counters or expedited check-in processes to <br /> minimize wait times.Entry to
          airport lounges equipped with comfortable seating, complimentary food and beverages,
          <br /> Wi-Fi, and other amenities to relax or work before your flight.
        </p>
      </div>
    </div>
  );
};

export default FreeService;
