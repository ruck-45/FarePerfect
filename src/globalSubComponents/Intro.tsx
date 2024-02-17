import React from "react";
import "./Intro.css";
type cardProps = {
  des: string;
};

const Intro = (props: cardProps) => {
  return (
    <div className={`h-[12rem] bg-[#0a97b0] flex flex-row items-center justify-start`}>
      <div className="md:px-[8rem] px-[2rem]">
        <h1 className="text-bold text-4xl font-normal text-start text-white">{props.des}</h1>
      </div>
    </div>
  );
};

export default Intro;
