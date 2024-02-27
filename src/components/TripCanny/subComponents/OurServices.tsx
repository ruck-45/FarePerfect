import ServiceImage from "./ServiceImage";

const OurServices = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-[3rem] gap-[2rem] pt-[5rem]">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl sm:text-5xl text-black font-bold font-serif">
          <span className="text-yellow-400">OUR</span> SERVICES
        </h1>
        <div className="md:h-[0.3rem] h-1 bg-black w-20 md:w-40 text-white"></div>
      </div>
      <div className="flex flex-col md:flex-row bg-white">
        <ServiceImage
          className="seo leading-[4rem] font-bold"
          textSize="3rem"
          width={800}
          image="https://images.unsplash.com/photo-1628964178609-aec11c666040?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          state={{ id: 2 }}
        />
        <ServiceImage
          className="smm leading-[4rem] font-bold"
          textSize="3rem"
          width={800}
          image="https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          state={{ id: 2 }}
        />
      </div>
    </div>
  );
};

export default OurServices;
