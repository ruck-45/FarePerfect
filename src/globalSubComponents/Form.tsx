import React from "react";

const Form = () => {
  return (
    <div className="bg-white h-auto p-[5rem]">
      <form action="">
        <div className="flex flex-col justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center justify-evenly md:gap-4 gap-6">
            <div className="border-2 border-yellow-500 md:py-[1rem] md:px-[10rem] py-[0.5rem] px-[4rem] ">
              <input className="text-thin text-start " type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="border-2 border-yellow-500 md:py-[1rem] md:px-[10rem] py-[0.5rem] px-[4rem]">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
          </div>

          <div className="border-2 border-yellow-500 md:py-[1rem] md:px-[26rem] py-[0.5rem] px-[4rem]">
            <input type="number" placeholder="Phone" name="phone" id="phone" />
          </div>

          <div className="border-2 border-yellow-500 md:py-[1rem] md:px-[26rem] py-[0.5rem] px-[4rem]">
            <input type="text" placeholder="Message" name="message" id="message" />
          </div>

          <div className="bg-black text-white md:py-[1rem] px-[4rem]  py-[0.5rem] ">
            <button className="text-bold md:text-2xl text-1xl">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
