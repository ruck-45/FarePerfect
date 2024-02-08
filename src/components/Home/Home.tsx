// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import Benefit from "./subComponents/Benefit";

import Achievement from "./subComponents/Achievement";
import Services from "./subComponents/Services";
import Description from "./subComponents/Description";
import Abovefoter from "./subComponents/Abovefoter";
import Product from "./subComponents/Product";
import FlightBooking from "./subComponents/FlightBooking";
import Mission from "../../globalSubComponents/Mission";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <HeroSection />
      <FlightBooking />
      <Benefit />
      <Mission />
      <Description />
      <Achievement />
      <Services />
      <Product />
      <Abovefoter />
    </div>
  );
};

export default Home;
