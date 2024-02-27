// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import OurPromise from "./subComponents/OurPromise";
import OurServices from "./subComponents/OurServices";
import Map from "./subComponents/Map";
import BookAFlight from "./subComponents/BookAFlight";
import FlightBooking from "./subComponents/FlightBooking";
import WhyChooseUs from "../../globalSubComponents/WhyChooseUs";
import Popover from "./subComponents/Popover";
import Dine from "../../globalSubComponents/Dine/Dine";
import Call from "../../globalSubComponents/Call";
import DestinationCard from "../../globalSubComponents/DestinationCard";
import NavBar from "./subComponents/NavBar";
import Footer from "./subComponents/Footer";

const TripCanny = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("TripCanny"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <NavBar />
      <Popover />
      <HeroSection />
      <FlightBooking />
      <DestinationCard />
      <WhyChooseUs />
      <OurServices />
      <OurPromise />
      <Dine />
      <Call />
      <BookAFlight />
      <Footer />
    </div>
  );
};

export default TripCanny;
