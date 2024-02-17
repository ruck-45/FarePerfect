import { Button, Input } from "@nextui-org/react";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 h-auto md:h-[12rem] lg:h-[8rem] w-full bg-[#0a97b0] px-[1rem] md:px-[8rem] ">
      <div className="flex flex-col py-2 md:py-8">
        <h1 className="text-white font-bold text-2xl">SIGN-UP NOW FOR EXCLUSIVE EMAIL-ONLY OFFERS</h1>
        <p className="text-white">SUBSCRIBE TO RECEIVE OFFERS ON EMAIL</p>
      </div>
      <div className="p-1 md:p-3 md:py-8">
        <Input
          type="text"
          placeholder="Enter Your Email"
          className=""
          size="lg"
          endContent={
            <Button
              className="mt-2 mb-2 w-[50%] text-white font-bold"
              color="warning"
              variant="solid"
              radius="sm"
              size="lg"
            >
              Subscribe
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default Subscribe;
