import React from 'react'

import ppo from './assets/random.jpg'

const Specialization = () => {
  return (
    <div className="bg-white h-auto lg:h-[40rem] flex lg:flex-row flex-col items-center justify-evenly border-black">
      <div className="w-[38em] md:p-[3rem] mt-[3rem] md:mt-[0.1rem] px-[2rem] h-[28rem] bg-center cover">
        <img className=" " src={ppo} />
      </div>
      <div className="lg:py-[2rem] py-[1rem] px-[2rem] h-auto bg-gray-200  rounded-xl">
        <div className='py-[1rem] md:py-[0.1rem]'>
          <h1 className="md:text-4xl  text-2xl font-large font-serif ">
            <span className="text-yellow-400 lg:text-start ">WHO</span> IS FarePerfect
          </h1>
          <div className="h-[0.3rem] w-[10rem] bg-black px-[8rem]"></div>
        </div>

        <p className="text-1xl text-medium  font-serif md:mt-[2rem]">
          "FarePerfect.com is a leading online platform for booking flights, <br /> offering users a seamless and
          efficient way to search, compare,
          <br /> and book airfare. With a user-friendly interface and advanced search <br /> functionalities,
          FarePerfect.com enables travelers to find the best <br /> deals on flights quickly and easily. <br /> Whether
          planning a business trip, vacation, or family visit, FarePerfect.com <br />
          provides a comprehensive range of options tailored to individual preferences <br />
          and budgets. With a commitment to reliability, affordability, and <br />
          customer satisfaction, FarePerfect.com is the go-to destination for <br /> hassle-free flight bookings."
        </p>
      </div>
    </div>
  );
}

export default Specialization