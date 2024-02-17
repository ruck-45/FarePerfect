import { Card, CardFooter, Image } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import dubai from "../globalAssets/images/dubai.jpg";
import maldives from "../globalAssets/images/maldives.jpg";
import malasia from "../globalAssets/images/malasia.jpg";
import bali from "../globalAssets/images/bali.jpg";
import paris from "../globalAssets/images/paris.jpg";
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
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[80rem] mx-auto",
    focusOnSelect: true,
    centerMode: true,
    arrows: undefined,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          className: "max-w-[50rem] mx-auto",
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          className: "max-w-[35rem] mx-auto",
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          className: "max-w-[22rem] mx-auto",
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center py-[3rem]">
      <h1 className="text-5xl font-bold font-serif text-white text-center">
        Popular <span className="text-[#0a97b0]">Destinations</span>
      </h1>
      <h2 className="text-center font-bold font-serif text-white py-[1.5rem]">
        Enjoy Your <span className="text-[#0a97b0]">Destination</span>{" "}
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {content.map((e, index) => (
            <div key={index} className="w-auto">
              <Card isFooterBlurred radius="lg" className="border-none w-[14rem] h-[20rem]">
                <Image alt={e.place} className="object-cover w-[15rem] h-[20rem]" src={e.pic} />
                <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <div className="flex flex-col">
                    <p className="text-white/80">{e.place}</p>
                    <p className="text-md text-white/80 font-bold">{e.title}</p>
                    <p className="text-tiny text-white/80">{e.des}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DestinationCard;
