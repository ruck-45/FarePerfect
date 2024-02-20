// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import phot from './assets/medium-shot-smiley-people-traveling.jpg'


const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const title = { des: "About Us" };

  return (
    <div>
      <Intro des={title.des} />
      <div className="flex flex-row lg:items-start lg:justify-start md:items-center md:justify-center py-[4rem] md:px-[8rem] px-[2rem] bg-white">
        <div className="flex flex-col items-start justify-center">
          <div className="py-[1.5rem]">
            <h1 className="text-3xl font-semibold text-black font-['Kanit']">About Us</h1>
          </div>
          <div className="py-[1rem] text-gray-600">
            <p className="py-[1rem] text-1xl">
              "Welcome to FarePerfect - your ultimate destination for seamless travel planning and booking! At
              FarePerfect, we understand that your travel experiences should be nothing short of perfect. Whether you're
              jetting off for a business trip or embarking on a dream vacation, we're here to make every aspect of your
              journey smooth, convenient, and enjoyable.
            </p>

            <p className="py-[1rem] text-1xl">
              As a leading flight booking and hotel reservation platform, we offer a comprehensive range of services
              tailored to meet your travel needs. With just a few clicks, you can easily search, compare, and book
              flights to destinations around the globe. Our user-friendly interface and advanced search options ensure
              that you find the best fares and most convenient routes, saving you time and money.
            </p>
          </div>
        </div>
        <div className="h-auto w-[120rem] p-[2rem] py-[4rem] xl:inline-block hidden">
          <img src={phot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
