//Dependicies
import { RiChatHistoryFill } from "react-icons/ri";
import { MdDataExploration } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { MdHistoryToggleOff } from "react-icons/md";

const missionData = [
  {
    category: "Accident Data",
    icon: MdDataExploration, // Replace with the actual icon source
    details: [
      "Accident History",
      "Damage Severity (Severe/Minor)",
      "Damage Location/Point of Impact",
      "Records of Damage Repair",
      "Airbag Deployment",
      "Structural Damage",
    ],
  },
  {
    category: "Service History",
    icon: RiChatHistoryFill, // Replace with Actual width height photo
    details: [
      "Oil Changes",
      "Tire Rotations",
      "Open Recalls",
      "Brake Rotor Replacement",
      "Transmission Replacement",
      "Safety Inspections",
    ],
  },
  {
    category: "Type of Use",
    icon: FaCarSide,  // Replace with Actual width height photo
    details: [
      "Personal Vehicle",
      "Rental Vehicle",
      "Leased Vehicle",
      "Used as a Police Vehicle",
      "Commercial Vehicle",
      "Used as a Taxi",
    ],
  },
  {
    category: "Ownership History",
    icon: MdHistoryToggleOff, // Replace with Actual width height photo
    details: [
      "Personal Vehicle",
      "Rental Vehicle",
      "Leased Vehicle",
      "Used as a Police Vehicle",
      "Commercial Vehicle",
      "Used as a Taxi",
    ],
  },
];

const Mission = () => {
  return (
    <div className="bg-yellow-400 md:h-[40rem] h-auto w-full py-[2rem]">
      <div className="bg-white h-auto md:h-[38rem] text-black md:mx-[6rem] mx-[2rem] drop-shadow-xl rounded-sm ">
        <div className="flex flex-col items-center justify-center p-[5rem]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {missionData.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-3">
                <div className="text-5xl text-center rounded-full">
                  {<item.icon/>}
                </div>
                <div className="mt-5    text-2xl text-1xl font-serif text-black text-center">
                  <h1>{item.category}</h1>
                </div>
                <div className="mt-2 text-medium  text-center font-light text-black ">
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

         <div className= 'bg-yellow-500  border-solid mt-[4rem] md:mt-[6rem] px-4 py-2  '>
         <button  className='md:text-lg text-1xl font-semibold text-black'>VIEW SAMPLE REPORT</button>
         </div>
     </div>
    </div>
   </div>
  );
};

export default Mission;
