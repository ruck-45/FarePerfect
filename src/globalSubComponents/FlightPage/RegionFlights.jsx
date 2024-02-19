import Hero from "./Hero";
import record from "./data/sestination.json";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";

const RegionFlights = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Destination"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  let details = {};
  const location = useLocation();
  const params = useParams();

  const contentType = location.state.type;
  const name = params.place;

  console.log(params);

  if (contentType === "place") {
    details = record.filter((filterData) => filterData.place === name);
  }

  console.log("hhhhhhh", details);

  return (
    <>
      <Hero title={name} />
      {details &&
        details.map((e, i) => (
          <div className="flex flex-col justify-center items-start md:p-[4rem] p-[1rem] bg-white h-auto">
            <div className="p-[2rem]">
              <div className="py-[1rem]">
                <h1 className="text-3xl font-bold  ">
                  {e?.heading1} <span className="text-[#0a97b0]">FarePerfect</span>
                </h1>
              </div>
              <div>
                <p className="text-1xl  font-normal text-gray-600">{e?.des1}</p>
              </div>
            </div>

            {e?.airline &&
              e?.airline.map((data) => (
                <div className="p-[2rem] border-2">
                  <div className="py-[1rem]">
                    <h1 className="text-3xl font-bold  text-[#0a97b0] ">{data?.titlemain}</h1>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.description.map((head) => head?.name1)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">
                      {data?.description.map((head) => head?.about1)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.description.map((head) => head?.name2)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">
                      {data?.description.map((head) => head?.about2)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.description.map((head) => head?.name3)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">
                      {data?.description.map((head) => head?.about3)}
                    </p>
                  </div>
                </div>
              ))}

            {e?.faqquestion &&
              e?.faqquestion.map((data) => (
                <div className="p-[2rem] ">
                  <div className="py-[1rem]">
                    <h1 className="text-3xl font-bold  text-[#0a97b0] ">{data?.title2}</h1>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.query.map((filter) => filter?.query1)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">{data?.query.map((filter) => filter?.ans1)}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.query.map((filter) => filter?.query2)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">{data?.query.map((filter) => filter?.ans2)}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.query.map((filter) => filter?.query3)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">{data?.query.map((filter) => filter?.ans3)}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.query.map((filter) => filter?.query4)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">{data?.query.map((filter) => filter?.ans4)}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold  py-[0.5rem]">{data?.query.map((filter) => filter?.query5)}</h3>
                    <p className="text-1xl  font-normal text-gray-600">{data?.query.map((filter) => filter?.ans5)}</p>
                  </div>
                </div>
              ))}

            <div className="p-[2rem]">
              <div className="py-[1rem]">
                <h1 className="text-3xl font-bold  ">{e?.reach}</h1>
              </div>
              <div>
                <p className="text-1xl  font-normal text-gray-600">{e?.answer}</p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center px-[2rem]  ">
              <h2 className="text-3xl  font-bold ">
                Why Book with <span className="text-[#0a97b0]">FarePerfect</span>
              </h2>
              <div>
                <ul className="list-disc text-1xl text-gray-600  font-normal px-[2rem] py-[1rem]">
                  <li>Best Prices GUARANTEED</li>
                  <li>Fast, Easy & Secure Reservations</li>
                  <li>24/7 Booking Assistance</li>
                  <li>Exclusive Deals</li>
                  <li>Best service guaranteed</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center px-[2rem] ">
              <h2 className="text-3xl  font-bold ">
                In-Flight Amenities <span className="text-[#0a97b0]">Amenities</span>
              </h2>
              <div>
                <ul className="list-disc text-1xl text-gray-600  font-normal px-[2rem] py-[1rem]">
                  <li>
                    Domestic aircraft’s have a provision of seat-back entertainment systems with a wide range of music,
                    TV and movies to choose from
                  </li>
                  <li>
                    Passengers can also enjoy the Audio-Video on demand (AVOD) along with a great selection of games.
                  </li>
                  <li>
                    Free messaging service, including WhatsApp and Facebook messenger is provided in the airlines WiFi
                    enabled flights.
                  </li>
                  <li>
                    The inflight food service offers a complimentary multi-course meal including a great selection of
                    house wine, free beer and bottled water.
                  </li>
                  <li>New inflight cabins have more spacious overhead bins, more power outlets and new carpets</li>
                  <li>
                    Passenger can enjoy a mood lighting system, which is a newly introduced feature enabling them to
                    adjust the lighting as per the need and mood.
                  </li>
                  <li>
                    Flyers have the opportunity to earn mileage points through Endeavor Airlines SkyMiles and SkyBonus
                    programs and enjoy some great perks by redeeming the points earned.
                  </li>
                  <li>
                    Access to lounges known as Sky Club at prominent city airports like Boston, Dallas, Chicago, and New
                    York among others.
                  </li>
                  <li>
                    Welcomes pets and offers emotional support animals onboard on a special request with no extra
                    charges.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center px-[2rem]">
              <h2 className="text-3xl  font-bold  ">
                Make Your Travel Easier With <span className="text-[#0a97b0]">FarePerfect</span>
              </h2>
              <div>
                <ul className="list-disc text-1xl text-gray-600  font-normal px-[2rem] py-[1rem]">
                  <li>Track & manage your itineraries</li>
                  <li>Get access to App only exclusive fares</li>
                  <li>Receive special Promo Codes & Discount</li>
                  <li>Plan, book and manage your travel on the go with our Travel App</li>
                  <li>Search thousands of fares to your preferred destination</li>
                  <li>Book the lowest Flight</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default RegionFlights;
