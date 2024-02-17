// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import OurPromise from "./subComponents/OurPromise";
import OurServices from "./subComponents/OurServices";
import Map from "./subComponents/Map";
import BookAFlight from "./subComponents/BookAFlight";
import WhyChooseUs from "../../globalSubComponents/WhyChooseUs";
import Popover from "./subComponents/Popover";
import Dine from "../../globalSubComponents/Dine/Dine";
import Call from "../../globalSubComponents/Call";
import DestinationCard from "../../globalSubComponents/DestinationCard";
import Slider from "../../globalSubComponents/Carasoul/Slider";
import FlightBooking from "./subComponents/FlightBooking";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Popover />
      <Slider/>
      <FlightBooking/>
      <DestinationCard/>
      <WhyChooseUs />
      <OurServices />
      <OurPromise />
      <Dine />
      <Call />
      <BookAFlight />
      <Map />
    </div>
  );
};

export default Home;
