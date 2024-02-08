import React from "react";
import { IconType } from "react-icons";

type cardsProps = {
  photo: IconType;
  title: string;
  des: string;
};

const Card = (props: cardsProps) => {
  return (
    <div className="bg-white shadow-2xl w-[22rem] hover:scale-105 transition duration-150 ease-in-out px-[2rem] py-[3rem]">
      <div className="flex flex-col items-center justify-center gap-[1rem]">
        <div className="text-center text-6xl mb-[1rem]">{<props.photo />}</div>
        <div className=" text-2xl font-medium text-center">
          <h1>{props.title}</h1>
        </div>
        <div className="px-[2rem]">
          <div className=" text-1xl font-light text-center ">
            <h2>{props.des}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
