// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import EmailForm from "./subComponent/EmailForm";
import Map from "./subComponent/Map";
import Intro from "../../globalSubComponents/Intro";

// Local Files


const Contact = () => {

  const title = { des: "Contact Us" };

  return (
    <div className="bg-white ">
      <Intro des={title.des}/>
      <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center md:px-[5rem] lg:px-[0rem] py-[2rem]">
        <EmailForm />
        <Map />
      I</div>
    </div>
  );
};

export default Contact;
