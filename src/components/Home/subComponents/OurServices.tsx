const OurServices = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center py-[1rem] gap-[2rem] pt-[5rem] pb-[3rem]">
        <div className="flex flex-col sm:gap-[0.5rem]">
          <h1 className="text-4xl sm:text-5xl font-bold  text-black text-center font-['Kanit']">
            Our <span className="text-[#0a97b0]">Services</span>
          </h1>
          <h2 className="text-center font-bold  text-black">
            We Promise <span className="text-[#0a97b0]">Quality</span>{" "}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] bg-white">
        <div className="flex bg-white lg:flex-row flex-col items-center justify-evenly md:px-[5rem] px-[2rem] gap-10">
          <div className="flex flex-col justify-center lg:items-end items-start">
            <h1 className="font-bold text-3xl text-[#0a97b0] font-['Kanit']">
              Flight <span className="text-gray-700"> Booking</span>
            </h1>
            <div className="py-[1rem] ">
              <p className="text-gray-600 font-normal text-justify text-[0.9rem]">
                "Discover seamless travel planning with FarePerfect's flight booking service. Explore a world of
                destinations and find the best fares for your journey. Whether you're jet-setting for business or
                leisure, we make it easy to compare prices, select the perfect flight, and secure your seat with
                confidence. Trust FarePerfect for hassle-free booking and embark on your next adventure with peace of
                mind."
              </p>
            </div>
            <button className="py-[0.5rem] px-[1.7rem] bg-[#0a97b0] text-white text-[0.9rem]">Read More</button>
          </div>
          <div className=" lg:inline-block hidden ">
            <div
              className="border-[0.5rem] w-[30rem] h-[20rem] flex-grow lg:inline-block hidden bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
          </div>
        </div>

        <div className="flex bg-white lg:flex-row flex-col items-center justify-evenly md:px-[5rem] px-[2rem] gap-10 pb-[5rem] ">
          <div className=" lg:inline-block hidden ">
            <div
              className="border-[0.5rem] w-[30rem] h-[20rem] flex-grow lg:inline-block hidden bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className=" font-bold text-3xl text-[#0a97b0] font-['Kanit']">
              Hotel <span className="text-gray-700">Booking</span>
            </h1>
            <div className="py-[1rem] ">
              <p className="text-gray-600  font-normal text-justify text-[0.9rem]">
                "Welcome to FarePerfect, where your ideal hotel stay awaits! Browse our extensive selection of
                accommodations worldwide and book with ease. From luxurious resorts to cozy boutique hotels, we have
                something for every traveler's taste and budget. Enjoy seamless booking, unbeatable deals, and
                exceptional customer service. Your perfect hotel experience starts here at FarePerfect."
              </p>
            </div>
            <button className="py-[0.5rem] px-[1.7rem] bg-[#0a97b0] text-white text-[0.9rem]">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
