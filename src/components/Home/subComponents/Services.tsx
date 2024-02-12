//dependices
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";
import { FaSellcast } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { RiServiceFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";

// Local Files


// Define your data as a JSON object
const servicesData = [
  {
    photo: FaCarAlt,
    title: "Shop Used Car",
    description:
      "Discover a curated selection of top-notch used cars. Your dream ride awaits at unbeatable prices. Explore now!",
  },
  {
    photo: MdOutlineReport ,
    title: "Get Vehicle Report",
    description:
      "Gain peace of mind with our comprehensive vehicle reports. Uncover the history, condition, and reliability of your next ride. Drive confidently, choose with assurance!",
  },
  {
    photo: FaSellcast,
    title: "Sell Your Car",
    description:
      "Turn your wheels into cash effortlessly! Sell your car hassle-free with us. Fast, fair, and stress-free transactions. Get your quote now!",
  },
  {
    photo:GrVmMaintenance  ,
    title: "Car Maintenance",
    description:
      "Extend the life of your vehicle with our expert car maintenance service. From routine inspections to preventive care, we keep your ride running smoothly",
  },
  {
    photo:  GiMoneyStack,
    title: "Easy-Finance",
    description:
      "Simplify your path to ownership with our easy finance solutions. Get behind the wheel hassle-free. Fast approvals, flexible terms – drive your dream car today!",
  },
  {
    photo: RiServiceFill,
    title: "Fast Service",
    description:
      "Experience lightning-fast service for your vehicle needs. Our skilled team ensures quick and efficient solutions, getting you back on the road in no time. Speed meets quality at [Your Business Name].",
  },
];

const Services = () => {
  return (
    <div className="bg-white md:h-[35rem] h-auto w-full">
      <div className="bg-white h-full text-black md:mx-[8rem] mx-[2rem] rounded-sm">
        <div className="md:grid md:grid-cols-3 md:gap-8 flex flex-col justify-between items-center gap-6">
          {/* {servicesData.map((service, index) => (
            <Card key={index} photo={service.photo} title={service.title} des={service.description} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Services;
