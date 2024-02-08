//Dependicies
import { MdDataExploration } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { LuBaggageClaim } from "react-icons/lu";

const missionData = [
  {
    category: "Travel Protection",
    icon: FaShieldAlt, // Replace with the actual icon source
    details:
      "Safeguard your travel plans, belongings, and well-being with our comprehensive travel protection services. ",
  },
  {
    category: "Special Baggage Protection",
    icon: LuBaggageClaim, // Replace with Actual width height photo
    details:
      "Our Special Baggage Protection to your trip because it will either find and return your delayed bags or give a refund.",
  },
  {
    category: "Customer Support",
    icon: MdDataExploration, // Replace with Actual width height photo
    details: "Email at support@fairperfect.com. All your concerns would be addressed at the earliest.",
  },
];

const Mission = () => {
  return (
    <div className="bg-yellow-400 h-auto w-full py-[2rem]">
      <div className="bg-white h-auto text-black md:mx-[6rem] mx-[2rem] drop-shadow-xl rounded-sm ">
        <div className="flex flex-col items-center justify-center p-[5rem]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {missionData.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-3">
                <div className="text-5xl text-center rounded-full">{<item.icon />}</div>
                <div className="mt-5    text-2xl text-1xl font-serif text-black text-center">
                  <h1>{item.category}</h1>
                </div>
                <div className="mt-2 text-medium  text-center font-light text-black ">{item.details}</div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500  border-solid mt-[4rem] md:mt-[6rem] px-4 py-2  ">
            <button className="md:text-lg text-1xl font-semibold text-black">KNOW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
