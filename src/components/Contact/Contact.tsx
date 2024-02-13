import Intro from "../../globalSubComponents/Intro";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import EmailForm from "./subElements/EmailForm";
import Map from "./subElements/Map";
import ContactCard from "./subElements/ContactCard";
import Subscribe from "../../globalSubComponents/Subscribe";
const title = { des: "Contact Us" };

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro des={title.des} />
      <div className="grid lg:grid-cols-3 bg-white gap-5 p-[1rem] md:p-[2rem] md:px-[8rem]">
        <ContactCard heading="Email" value="support@fareperfect.com" icon={<MdEmail />} />
        <ContactCard heading="Phone" value="+1 (844) 671-7473" icon={<MdPhone />} />
        <ContactCard heading="Address" value="544 McCabe St, Port Charlotte, FL 33953, USA" icon={<FaAddressBook />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start">
        <EmailForm />
        <Map />
      </div>
      <Subscribe />
    </div>
  );
};

export default Contact;
