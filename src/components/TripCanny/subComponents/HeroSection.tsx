// Local Files
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection flex flex-col md:flex-row justify-evenly md:min-h-[35rem] px-[1rem] sm:px-[3rem] md:px-[5rem] py-[5rem] gap-[2rem] md:gap-0">
      <h1 className="text-yellow-400 font-bold text-[3rem] sm:text-[4rem] leading-[3rem] sm:leading-[4rem] md:leading-[6rem] md:text-[5.5rem] font-serif md:max-w-[30rem] text-center md:text-left">
        Planning Your Next Getaway <span className="text-white">?</span>
      </h1>
      <div className="flex md:flex-col items-center justify-center gap-[1rem]">
        <div className="bg-yellow-400 hover:bg-white hover:text-yellow-400 md:min-w-[12rem] cursor-pointer p-[1rem] text-center text-white text-xl md:text-2xl font-semibold font-serif">
          Book Flights
        </div>
        <div className="hidden md:block px-[4rem]">
          <span className="text-white font-bold text-2xl md:text-4xl font-serif "> AND </span>
        </div>
        <div className="bg-yellow-400 hover:bg-white hover:text-yellow-400 md:min-w-[12rem] cursor-pointer p-[1rem] text-center text-white text-xl md:text-2xl font-semibold font-serif">
          Grab Deals
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
