import React from "react";

const FreeService = () => {
  return (
    <div className=" flex flex-row items-center justify-evenly gap-12 md:px-[5rem] px-[2rem] py-[rem]  ">
      <div className="px-[3rem] md:block hidden">
        <img
          className="md:w-[38rem] md:h-[15rem] "
          src="https://img.freepik.com/premium-photo/vibrant-image-capturing-essence-travel-vacation_818261-9852.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
          alt=""
        />
      </div>
      <div className="py-[2rem]">
        <h2 className="font-bold font-serif text-1xl py-[1rem]">
          AT THE <span className="text-yellow-600">AIRPORT</span>
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
