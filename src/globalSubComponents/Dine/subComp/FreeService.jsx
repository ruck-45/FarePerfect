import React from "react";

const FreeService = () => {
  return (
    <div className=" flex flex-row items-center justify-center gap-5 md:px-[5rem] px-[2rem] py-[rem] h-auto w-auto  ">
      <div className="px-[2rem] w-[38rem] h-auto md:block hidden ">
        <img
          className="w-[35rem]  "
          src="https://img.freepik.com/free-photo/view-3d-airplane-with-wings-engine_23-2151022210.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
          alt=""
        />
      </div>
      <div className="py-[2rem]">
        <h2 className="font-bold font-serif text-1xl py-[1rem]">
          AT THE <span className="text-[#0a97b0]">AIRPORT</span>
        </h2>
        <p className="text-gray-600">
          Access to separate check-in counters or expedited check-in processes to <br /> minimize wait times.Entry to
          airport lounges equipped with comfortable seating, complimentary food and beverages, Wi-Fi, and other
          amenities to <br />
          relax or work before your flight.
        </p>
      </div>
    </div>
  );
};

export default FreeService;
