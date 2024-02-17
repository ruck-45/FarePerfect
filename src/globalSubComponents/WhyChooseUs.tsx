//Dependicies
import "./Whychoseus.css";

const WhyChooseUs = () => {
  return (
    <div className="mg flex lg:flex-row flex-col items-center justify-evenly md:p-[5rem] p-[2rem] gap-10">
      {/* content */}
      <div className="flex flex-col justify-center items-start">
        <div className="py-[2rem]">
          <h1 className=" font-bold text-4xl text-white">
            Who Are <span className="text-white">We ?</span>
          </h1>
        </div>
        <div className="py-[1rem] ">
          <p className="text-white  text-[1rem] font-normal ">
            As a leading flight booking and hotel reservation platform, we offer a comprehensive range of services
            tailored to meet your travel needs. With just a few clicks, you can easily search, compare, and book flights
            to destinations around the globe. Our user-friendly interface and advanced search options ensure that you
            find the best fares and most convenient routes, saving you time and money.
          </p>
        </div>
        <div className="py-[1rem] ">
          <button className="py-[1rem] px-[2rem] bg-[#0a97b0] text-white">Read More</button>
        </div>
      </div>

      {/* photo */}
      <div className="border-2 lg:inline-block hidden">
        <div>
          <img
            className="w-[100rem] h-[20rem] "
            src="https://img.freepik.com/free-photo/medium-shot-woman-working-plane_23-2151205488.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
