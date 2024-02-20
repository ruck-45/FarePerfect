import React from "react";

const Dinner = () => {
  return (
    <div className=" flex flex-row items-center justify-center gap-5 md:px-[5rem] px-[2rem] py-[rem] h-auto w-auto  ">
      <div className="py-[1rem]">
        <h2 className="font-bold py-[1rem] text-2xl font-['Kanit']">
          Fine <span className="text-[#0a97b0]">Dining</span> Service
        </h2>
        <p className="text-gray-600 text-[0.9rem]">
          In-flight dining service on airplanes typically involves meals and <br /> beverages served to passengers
          during their journey. <br /> Depending on the airline and flight duration, dining options can vary from light
          snacks to multi-course meals
        </p>
      </div>

      <div className="px-[2rem] w-[38rem] h-auto md:block hidden">
        <img
          className="w-[35rem]  "
          src="https://img.freepik.com/free-photo/fresh-grilled-meat-veggies-plate-generated-by-ai_188544-24662.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
          alt=""
        />
      </div>
    </div>
  );
};

export default Dinner;
