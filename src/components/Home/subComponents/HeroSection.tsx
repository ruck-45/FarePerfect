// Local Files
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection flex flex-col items-center md:min-h-[37rem]">
      <div className="grid flex-col md:grid-cols-2 justify-center items-center p-[2rem] lg:p-[5rem] xl:p-[10rem] ">
        <div className="text-yellow-400 font-bold text-5xl md:text-8xl font-serif mb-4">
          <h1>
            Planning Your Next Getaway <span className="text-white">?</span>
          </h1>
        </div>
        <div className="flex md:flex-col items-center gap-6 mt-[3rem]">
          <div className="bg-yellow-400 hover:bg-white hover:text-yellow-400 px-2 py-3 md:py-3 md:px-6  text-white text-xl md:text-2xl font-semibold font-serif">
            Book Flights
          </div>
          <div className="hidden md:block px-[4rem]">
            <span className="text-white font-bold text-2xl md:text-4xl font-serif "> AND </span>
          </div>
          <div className="bg-yellow-400 hover:bg-white hover:text-yellow-400 px-2 py-3 md:py-3 md:px-6  text-white text-xl md:text-2xl font-semibold font-serif">
            Grab Deals
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
