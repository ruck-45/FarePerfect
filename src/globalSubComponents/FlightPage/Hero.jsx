import "./Hero.css";

const Hero = ({ title }) => {
  return (
    <div className="Bg h-[20rem] ">
      <div className="flex flex-col items-center justify-center p-[8rem]   ">
        <div>
          <h1 className="md:text-5xl text-3xl font-bold   text-center text-white font-['Kanit']">{title}</h1>
        </div>
        <div className="h-[0.4rem] lg:w-[25rem] w-[15rem] bg-[#0a97b0]  "></div>
      </div>
    </div>
  );
};

export default Hero;
