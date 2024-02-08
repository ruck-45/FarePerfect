import React from "react";
import './Define.css'
import p1 from './assets/bag (1).jpg'
import p2 from "./assets/cus.jpg"
import p3 from "./assets/lug.jpg"


const content = [
  {
    title: "Customer Support",
    photo: p2,
    description:
      "Customer support for booking flights involves assisting customers throughout the flight booking process. Representatives help users find suitable flights, navigate booking options, resolve issues with reservations, payments, or changes, and provide information on policies, schedules, and amenities. They aim to ensure a seamless booking experience, address inquiries promptly, and offer personalized assistance to enhance customer satisfaction and loyalty.",
  },
  {
    title: "Baggage Protection",
    photo: p1,
    description:
      "Baggage protection service related to booking flights offers travelers peace of mind by providing insurance coverage for their checked and carry-on luggage. This service typically includes reimbursement for lost, damaged, or delayed baggage, as well as assistance in tracking and locating missing items. It ensures travelers are compensated for any inconvenience or financial loss due to baggage-related issues during their journey, enhancing their overall travel experience and minimizing potential disruptions.",
  },
  {
    title: "Travel Protection",
    photo: p3,
    description:
      "Travel protection service related to booking flights offers comprehensive coverage to travelers, including trip cancellation/interruption insurance, emergency medical coverage, baggage protection, and other benefits. This service provides financial protection and assistance in unforeseen circumstances such as trip delays, medical emergencies, or lost luggage. It gives travelers peace of mind and helps them navigate unexpected situations during their journey, ensuring a more secure and worry-free travel experience.",
  },
];


const Define = () => {
  return (
    <div className="bg-white h-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="p-[2rem]">
          <h1 className="md:text-5xl text-4xl font-serif font-bold text-black">
            Our <span className="text-yellow-600">Services</span>{" "}
          </h1>
          <div className="h-[0.2rem] md:w-[12rem] w-[5rem] bg-black"></div>
        </div>
        {content.map((e) => (
          <div className="flex xl:h-[28rem] h-auto flex-col md:flex-col xl:flex-row items-center justify-between p-[1rem]  border-b-2 border-yellow-600">
            {/* //Photo section */}
            <div className="flex flex-col justify-center items-center xl:p-[5rem] p-[1rem] ">
              <div className=" bg h-[19rem] w-[25rem] mt-[2rem]  ">
                <img src={e.photo} />
              </div>
            </div>
            {/* //paragraph section */}
            <div className="xl:p-[2rem]  px-[3rem] xl:mb-[5rem] flex flex-col mb-[2rem]  ">
              <div className="lg:py-[2rem]">
                <h2 className="font-serif text-yellow-600 font-bold xl:text-start  text-center text-2xl">{e.title}</h2>
              </div>
              <p className="font-serif font-thin text-gray-500 xl:text-start text-center font-1xl ">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Define;
