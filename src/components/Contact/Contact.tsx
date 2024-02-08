import React from "react";
import Intro from "../../globalSubComponents/Intro";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import EmailForm from "./subElements/EmailForm";
import Map from "./subElements/Map";
import CTA from "./subElements/CTA";
import ContactCard from "./subElements/ContactCard";
const title = { des: "Contact Us" };

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));
  return (
    <div>
      <Intro des={title.des} />
      <div className="grid lg:grid-cols-3 bg-white gap-5 p-[1rem] md:p-[2rem] md:px-[8rem]">
        <ContactCard heading="Email" value="support@fairperfect.com" icon={<MdEmail />} />
        <ContactCard heading="Phone" value="+1 (888) 891-7176" icon={<MdPhone />} />
        <ContactCard heading="Address" value="544 McCabe St, Port Charlotte, FL 33953, USA" icon={<FaAddressBook />} />
      </div>
      <div className="grid lg:grid-cols-2 justify-start">
        <EmailForm />
        <Map />
      </div>
      <CTA text="Want To Book Flight ?" color="warning" showArrow={true} text2="Call Us Now !" to="../Contact" />
    </div>
  );
};

export default Contact;
