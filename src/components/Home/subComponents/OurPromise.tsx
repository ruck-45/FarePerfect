//dependices
import { GiMoneyStack } from "react-icons/gi";
import { BsAirplaneFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

// Local Files
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

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

const OurPromise = () => {
  return (
    <div className="flex bg-[#f8f9fa] overflow-hidden">
      <div
        className="hidden lg:flex  bg-no-repeat bg-center bg-cover w-[90rem] h-auto"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/beautiful-portrait-young-business-asian-woman-happy-smile-many-action_74190-10612.jpg?w=360&t=st=1708277779~exp=1708278379~hmac=56adf1e68c5afdc6a876ead5016881b754a5c77cb3f53f67bcce0b62093c73d0")`,
        }}
      ></div>
      <div className="flex flex-col gap-y-[3rem] items-center px-[2rem] py-[4rem]">
        <h1 className="text-center text-4xl sm:text-5xl text-black font-bold font-['Kanit']">
          Our <span className="text-[#0a97b0]">Benefits</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[2rem] lg:gap-y-[4rem] gap-x-[2rem] justify-center items-start p-[1rem]">
          {servicesData.map((service, index) => (
            <>
              <div className="hidden lg:flex flex-col gap-2">
                <div className="flex flex-row gap-x-4">
                  <service.photo size={25} className="text-[#0a97b0]" />
                  <h1 className="font-semibold text-xl lg:text-[1.2rem] font-['Kanit']">{service.title}</h1>
                </div>
                <Divider className="bg-[#0a97b0]" />
                <p className="text-[0.9rem]">{service.description}</p>
              </div>
              <Card className="lg:hidden h-[15rem] p-4 hover:scale-105">
                <CardHeader className="flex gap-3">
                  <service.photo size={30} className="text-[#0a97b0]" />
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold">{service.title}</p>
                  </div>
                </CardHeader>
                <Divider className="bg-[#0a97b0]" />
                <CardBody>
                  <p>{service.description}</p>
                </CardBody>
              </Card>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
