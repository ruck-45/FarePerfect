// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Specialization from "./subComponents/Specialization";
import Intro from "../../globalSubComponents/Intro";
import Define from "./subComponents/Define";
import Subscribe from "../../globalSubComponents/Subscribe";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const title = { des: "About" };

  return (
    <div>
      <Intro des={title.des} />
      <Specialization />
      <Define />
      <Subscribe/>
    </div>
  );
};

export default About;
