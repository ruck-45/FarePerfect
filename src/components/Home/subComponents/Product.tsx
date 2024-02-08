import "./Product.css";

const Product = () => {
  return (
    <div className="ProductSection flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-[3rem] w-[100%] md:px-[3rem] p-[10rem]  ">
        <div className="bg-yellow-500 md:h-[15rem] h-[25rem] px-[2rem] border rounded-xl ">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-[3rem] gap-7">
            <div className="flex flex-col items-start justify-between">
              <div className="text-4xl font-bold text-white ">
                <h1>REQUEST A FREE QUOTE</h1>
              </div>
              <div className="text-2xl font-thin text-black mt-3">
                <h2>Get answers and advice from people you want it from.</h2>
              </div>
            </div>

            <div className="bg-black border rounded-full px-[5rem]   mt-[2rem] py-4 text-white">
              <button className="text-2xl font-bold font-serif ">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
