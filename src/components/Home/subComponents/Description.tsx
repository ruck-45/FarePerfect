import p1 from "../assets/used.jpg";
import p2 from "../assets/new.jpg";
import ServiceImage from "./ServiceImage";

const Description = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center gap-5">
        <div>
          <h1 className="md:text-5xl text-center text-2xl text-black font-bold font-serif pt-[10rem]">
            <span className="text-yellow-600">OUR</span> PRODUCTS
          </h1>
          <div className="md:h-[0.3rem] h-1 bg-black w-20 md:w-40 text-white  mx-[23rem] mb-[4rem]"></div>
        </div>
        <div className="flex flex-col md:flex-row bg-white ">
          <ServiceImage className="seo" textSize="3rem" width={800} image={p1} state={{ id: 2 }} />
          <ServiceImage className="smm" textSize="3rem" width={800} image={p2} state={{ id: 2 }} />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Description;
