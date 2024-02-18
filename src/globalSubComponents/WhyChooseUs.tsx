//Dependicies
import { Link } from "react-router-dom";
import "./Whychoseus.css";

const WhyChooseUs = () => {
  return (
    <div className="mg flex lg:flex-row flex-col items-center justify-evenly md:p-[5rem] p-[2rem] gap-10">
      <div className="flex flex-col justify-center items-start gap-[2rem]">
        <h1 className=" font-bold text-5xl text-white font-['Kanit']">
          Who Are <span className="text-white">We ?</span>
        </h1>
        <p className="text-white  text-[0.9rem] font-normal text-justify max-w-[160rem] bg-no-repeat bg-center bg-cover">
          As a leading flight booking and hotel reservation platform, we offer a comprehensive range of services
          tailored to meet your travel needs. With just a few clicks, you can easily search, compare, and book flights
          to destinations around the globe. Our user-friendly interface and advanced search options ensure that you find
          the best fares and most convenient routes, saving you time and money.
        </p>
        <Link to="../About">
          <button className="py-[0.5rem] px-[1.7rem] bg-[#0a97b0] text-white text-[0.9rem]">Read More</button>
        </Link>
      </div>

      <div
        className="border-[0.5rem] w-[100rem] h-[20rem] flex-grow lg:inline-block hidden"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/medium-shot-woman-working-plane_23-2151205488.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated)",
        }}
      ></div>
    </div>
  );
};

export default WhyChooseUs;
