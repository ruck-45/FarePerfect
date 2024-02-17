import ServiceImage from "./ServiceImage";

const OurServices = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center py-[1rem] gap-[2rem] pt-[5rem]">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl sm:text-5xl text-black font-bold font-serif">
            <span className="text-[#0a97b0]">OUR</span> SERVICES
          </h1>
          <div className="md:h-[0.3rem] h-1 bg-[#0a97b0] w-20 md:w-40 text-white"></div>
        </div>
      </div>
      <div className="flex bg-white lg:flex-row flex-col items-center justify-evenly md:p-[5rem] p-[2rem] gap-10">
        <div className="flex flex-col justify-center lg:items-end items-start">
          <div className="py-[2rem]">
            <h1 className=" font-bold text-4xl text-[#0a97b0]">
              Flight <span className="text-gray-700"> Booking</span>
            </h1>
          </div>
          <div className="py-[1rem] ">
            <p className="text-gray-600 lg:text-end text-start font-normal ">
              "Discover seamless travel planning with FarePerfect's flight booking service. Explore a world of
              destinations and find the best fares for your journey. Whether you're jet-setting for business or leisure,
              we make it easy to compare prices, select the perfect flight, and secure your seat with confidence. Trust
              FarePerfect for hassle-free booking and embark on your next adventure with peace of mind."
            </p>
          </div>
          <div className="py-[1rem] ">
            <button className="py-[1rem] px-[2rem] bg-[#0a97b0] text-white">Read More</button>
          </div>
        </div>
        <div className=" lg:inline-block hidden ">
          <div>
            <img
              className="w-[105rem] xl:h-[23rem] h-auto"
              src="https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895699.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex bg-white lg:flex-row flex-col items-center justify-evenly md:px-[5rem] px-[2rem] py-[2rem] gap-10">
        {/* photo */}
        <div className=" lg:inline-block hidden ">
          <div>
            <img
              className="w-[105rem] xl:h-[23rem] h-auto"
              src="https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497281.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
              alt=""
            />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col justify-center items-start">
          <div className="py-[2rem]">
            <h1 className=" font-bold text-4xl text-[#0a97b0]">
              Hotel <span className="text-gray-700">Booking</span>
            </h1>
          </div>
          <div className="py-[1rem] ">
            <p className="text-gray-600  font-normal ">
              "Welcome to FarePerfect, where your ideal hotel stay awaits! Browse our extensive selection of
              accommodations worldwide and book with ease. From luxurious resorts to cozy boutique hotels, we have
              something for every traveler's taste and budget. Enjoy seamless booking, unbeatable deals, and exceptional
              customer service. Your perfect hotel experience starts here at FarePerfect."
            </p>
          </div>
          <div className="py-[1rem] ">
            <button className="py-[1rem] px-[2rem] bg-[#0a97b0] text-white">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
