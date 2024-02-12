// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import OurPromise from "./subComponents/OurPromise";
import OurServices from "./subComponents/OurServices";
import Abovefoter from "./subComponents/Abovefoter";
import Product from "./subComponents/Product";
import FlightBooking from "./subComponents/FlightBooking";
import WhyChooseUs from "../../globalSubComponents/WhyChooseUs";
import Popover from "./subComponents/Popover";
import Dine from "../../globalSubComponents/Dine/Dine";
import Call from "../../globalSubComponents/Call";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      {/* <Popover /> */}
      <HeroSection />
      <FlightBooking />
      <WhyChooseUs />
      <OurServices />
      <OurPromise />
      <Dine/>
      <Call/>
      <Product />
      <Abovefoter />
    </div>
  );
};

export default Home;
