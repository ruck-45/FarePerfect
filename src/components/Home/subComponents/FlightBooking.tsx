// Dependencies
import { RadioGroup, Radio, Input, Divider, Select, SelectItem, Button } from "@nextui-org/react";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useState } from "react";
import { IoPeople, IoSend } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

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
  const [roundTrip, setRoundTrip] = useState(true);

  return (
    <div className="bg-white relative flex justify-center py-[5rem] md:py-0">
      <div className="w-[80%] p-[3rem] bg-white rounded-xl drop-shadow-xl relative md:top-[-7rem] flex flex-col gap-[2rem]">
        <RadioGroup
          orientation="horizontal"
          color="danger"
          defaultValue="round-trip"
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
            <Input type="text" label="From" startContent={<MdFlightTakeoff />} />
            <Input type="text" label="to" startContent={<MdFlightLand />} />
            <Input type="date" label="date" startContent={<BsFillCalendarDateFill />} />
            <Select label="Class" defaultSelectedKeys={["economy"]} className="max-w-xs">
              {flightClass.map((data) => (
                <SelectItem value={data.value} key={data.value}>
                  {data.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Divider className="mt-[1rem]" />
          {roundTrip ? (
            <>
              <p className="text-default-500">Arrival</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
                <Input type="text" label="From" startContent={<MdFlightTakeoff />} />
                <Input type="text" label="to" startContent={<MdFlightLand />} />
                <Input type="date" label="date" startContent={<BsFillCalendarDateFill />} />
                <Select label="Class" defaultSelectedKeys={["economy"]} className="max-w-xs">
                  {flightClass.map((data) => (
                    <SelectItem value={data.value} key={data.value}>
                      {data.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <Divider className="mt-[1rem]" />
            </>
          ) : null}
          <p className="text-default-500">Personal Information</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
            <Input type="number" label="Passengers" defaultValue="1" startContent={<IoPeople />} />
            <Input type="text" label="Name" startContent={<CgProfile />} />
            <Input type="email" label="Email" startContent={<MdEmail />} />
            <Input type="phone" label="Phone" startContent={<FaPhone />} />
          </div>
          <Button
            color="warning"
            variant="shadow"
            type="submit"
            className="text-white self-center mt-[2rem]"
            endContent={<IoSend className="mt-[0.2rem]" />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FlightBooking;
