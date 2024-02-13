import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import dubai from "../globalAssets/images/dubai.jpg";
import maldives from "../globalAssets/images/maldives.jpg";
import malasia from "../globalAssets/images/malasia.jpg";
import bali from '../globalAssets/images/bali.jpg';
import paris from '../globalAssets/images/paris.jpg'

const content = [
  {
    place: "DUBAI",
    pic: dubai,
    title: "Explore Dubai",
    des: "Experience the vibrant cityscape of Dubai. From iconic skyscrapers...",
  },
  {
    place: "PARIS",
    pic: paris,
    title: "Explore Paris",
    des: "Experience the vibrant cityscape of Paris. From iconic skyscrapers...",
  },
  {
    place: "MALDIVES",
    pic: maldives,
    title: "Explore Maldives",
    des: "Experience the vibrant cityscape of Maldives. From iconic skyscrapers...",
  },
  {
    place: "BALI",
    pic: bali,
    title: "Explore Bali",
    des: "Experience the vibrant cityscape of Bali. From iconic skyscrapers...",
  },
  {
    place: "MALASIA",
    pic: malasia,
    title: "Explore Malasia",
    des: "Experience the vibrant cityscape of malasia. From iconic skyscrapers...",
  },
];
const DestinationCard = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white ">
        <div className="">
          <h1 className="md:text-5xl text-3xl font-bold font-serif text-black">
            Popular <span className="text-yellow-600">Destination</span>
          </h1>
          <h2 className="text-center font-bold font-serif py-[1.5rem]">
            Enjoy Your <span className="text-yellow-600">Destination</span>{" "}
          </h2>
        </div>
        <div className="p-[3.5rem] lg:flex lg:flex-row  gap-6">
          {content.map((e) => (
            <Card isFooterBlurred radius="lg" className="border-none w-[14rem] h-[20rem]">
              <Image alt="Dubai" className="object-cover w-[14rem] h-[20rem]" src={e.pic} />
              <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="flex flex-col">
                  <p className="text-white/80">{e.place}</p>
                  <p className="text-md text-white/80 font-bold">{e.title}</p>
                  <p className="text-tiny text-white/80">{e.des}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
