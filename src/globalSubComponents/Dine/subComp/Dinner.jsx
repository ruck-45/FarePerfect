import React from "react";

const Dinner = () => {
  return (
    <div className=" flex flex-row items-center justify-evenly gap-12 md:px-[5rem] px-[2rem] py-[rem]  ">
      <div className="py-[1rem]">
        <h2 className="font-bold font-serif text-1xl py-[1rem]">
          FINE <span className="text-yellow-600">DINING</span> SERVICE
        </h2>
        <p className="text-gray-600">
          In-flight dining service on airplanes typically involves meals and <br /> beverages served to passengers
          during their journey. <br /> Depending on the airline and flight duration, dining options can vary from light
          snacks to multi-course meals
        </p>
      </div>

      <div className="px-[3rem] md:block hidden">
        <img
          className="md:w-[32rem] md:h-[15rem] "
          src="https://img.freepik.com/free-photo/fresh-grilled-meat-veggies-plate-generated-by-ai_188544-24662.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
          alt=""
        />
      </div>
    </div>
  );
};

export default Dinner;
