// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import EmailForm from "./subComponent/EmailForm";
import Map from "./subComponent/Map";

// Local Files


const Contact = () => {

  

  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center  lg:px-[2rem]">
      <EmailForm />
      <Map />
    </div>
  );
};

export default Contact;
