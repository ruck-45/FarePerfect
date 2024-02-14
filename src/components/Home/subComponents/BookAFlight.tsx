// Dependencies
import { Button } from "@nextui-org/react";

// Local Files
import "./BookAFlight.css";

const BookAFlight = () => {
  return (
    <div className="ProductSection flex justify-center items-center px-[3rem] md:px-[5rem] py-[5rem] max-h-[35rem]">
      <div className="bg-yellow-500 flex flex-col md:flex-row items-center md:items-start border justify-between px-[3rem] md:px-[5rem] py-[3rem] gap-[2rem] rounded-xl">
        <div className="flex flex-col items-start justify-between">
          <div className="text-4xl font-bold text-white ">BOOK A FLIGHT</div>
          <div className="text-2xl text-black mt-3 ">Relive your dream vacation with FarePerfect.</div>
        </div>

        <Button className="text-2xl font-bold font-serif bg-black border text-white self-center p-[2rem]" radius="full">
          Book Flight
        </Button>
      </div>
    </div>
  );
};

export default BookAFlight;
