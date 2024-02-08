//dependices
import { GiMoneyStack } from "react-icons/gi";
import { BsAirplaneFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

// Local Files
import Card from "../../../globalSubComponents/Card";

// Define your data as a JSON object
const servicesData = [
  {
    photo: BsAirplaneFill,
    title: "Streamlined Booking Experience",
    description:
      "Say goodbye to booking headaches! We've perfected our booking process to make it as smooth as a breeze.",
  },
  {
    photo: RiServiceFill,
    title: "Tailored Experiences",
    description:
      "At FarePerfect, we understand that every traveler is unique, which is why we pride ourselves on offering tailored experiences to each of our customers.",
  },
  {
    photo: BiWorld,
    title: "Worldwide Travel Connections",
    description:
      "Extensive Worldwide Network: Access diverse travel options worldwide with our extensive network of providers",
  },
  {
    photo: GiMoneyStack,
    title: "Affordable Adventures",
    description:
      "Explore the world without breaking the bank! Discover unbeatable prices on flights, accommodations, and more for your next journey.",
  },
  {
    photo: BiSupport,
    title: "Booking Bliss",
    description:
      "Our team of booking experts is dedicated to ensuring your travel dreams become reality. Let us ignite your wanderlust through our booking platform, where seamless planning meets unforgettable adventures. ",
  },
  {
    photo: IoShieldCheckmarkSharp,
    title: "Excellence in Every Booking",
    description:
      "At our booking website, we are dedicated to delivering unparalleled quality in every aspect of your travel experience.",
  },
];

const Services = () => {
  return (
    <div className="bg-white w-full pb-[3rem]">
      <div className="bg-white h-full text-black md:mx-[8rem] mx-[2rem] rounded-sm">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          {servicesData.map((service, index) => (
            <Card key={index} photo={service.photo} title={service.title} des={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
