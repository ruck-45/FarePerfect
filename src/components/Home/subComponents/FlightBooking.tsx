// Dependencies
import { RadioGroup, Radio, Input, Select, SelectItem, Button } from "@nextui-org/react";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useState } from "react";
import { IoPeople, IoSend } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./Flight.css";
const flightClass = [
  {
    name: "Economy",
    value: "economy",
  },
  {
    name: "Premium Economy",
    value: "premium-economy",
  },
  {
    name: "Business Class",
    value: "business-class",
  },
  {
    name: "First Class",
    value: "first-class",
  },
];

const FlightBooking = () => {
  const [roundTrip, setRoundTrip] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center py-[5rem] bg-[#0a97b0] gap-[2rem]">
      <div className="flex flex-col sm:gap-[0.5rem]">
        <h1 className="text-4xl sm:text-5xl font-bold  text-white text-center font-['Kanit']">
          Book <span className="text-black">Flights</span>
        </h1>
        <h2 className="text-center font-bold  text-white">
          Plan Your <span className="text-black">Next Trip</span>{" "}
        </h2>
      </div>
      <div className="w-[100%] sm:w-[80%] p-[3rem] bg-white sm:rounded-xl md:drop-shadow-xl border-2 flex flex-col gap-[2rem]">
        <RadioGroup
          orientation="horizontal"
          defaultValue="one-way"
          classNames={{
            wrapper: "gap-[2rem]",
          }}
          onChange={() => setRoundTrip((prev) => !prev)}
        >
          <Radio value="round-trip">Round Trip</Radio>
          <Radio value="one-way">One Way</Radio>
        </RadioGroup>
        <form action="" className="flex flex-col gap-[1rem]">
          <p className="text-default-500">Departure</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
            <Input type="text" label="From" variant="underlined" color="primary" startContent={<MdFlightTakeoff />} />
            <Input type="text" label="to" variant="underlined" color="primary" startContent={<MdFlightLand />} />
            <Input
              type="date"
              label="date"
              variant="underlined"
              color="primary"
              startContent={<BsFillCalendarDateFill />}
            />
            <Select
              label="Class"
              variant="underlined"
              color="primary"
              defaultSelectedKeys={["economy"]}
              className="max-w-xs"
            >
              {flightClass.map((data) => (
                <SelectItem value={data.value} key={data.value}>
                  {data.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          {roundTrip ? (
            <>
              <p className="text-default-500">Arrival</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                <Input
                  type="text"
                  label="From"
                  variant="underlined"
                  color="primary"
                  startContent={<MdFlightTakeoff />}
                />
                <Input type="text" label="to" variant="underlined" color="primary" startContent={<MdFlightLand />} />
                <Input
                  type="date"
                  label="date"
                  variant="underlined"
                  color="primary"
                  startContent={<BsFillCalendarDateFill />}
                />
                <Select
                  label="Class"
                  defaultSelectedKeys={["economy"]}
                  color="primary"
                  variant="underlined"
                  className="max-w-xs"
                >
                  {flightClass.map((data) => (
                    <SelectItem value={data.value} key={data.value}>
                      {data.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </>
          ) : null}
          <p className="text-default-500">Personal Information</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
            <Input
              type="number"
              label="Passengers"
              defaultValue="1"
              variant="underlined"
              color="primary"
              startContent={<IoPeople />}
            />
            <Input type="text" label="Name" variant="underlined" color="primary" startContent={<CgProfile />} />
            <Input type="email" label="Email" variant="underlined" color="primary" startContent={<MdEmail />} />
            <Input type="phone" label="Phone" variant="underlined" color="primary" startContent={<FaPhone />} />
          </div>
          <Button
            variant="shadow"
            type="submit"
            className="text-white bg-[#0a97b0] self-center mt-[2rem] p-[1.5rem]"
            radius="full"
            endContent={<IoSend className="" />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FlightBooking;
