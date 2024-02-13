import { useDispatch } from "react-redux";
import { updateTab } from "../store/curTabSlice";
import Intro from "./Intro";
import Subscribe from "./Subscribe";
import "./LastMin.css";
const title = { des: "Last Minute Flights" };

const LastMinuteFlights = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Last Minute Flights"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <Intro des={title.des} />
      <div className="flex flex-col justify-start h-auto bg-white gap-2 gap-y-6 px-[1rem] md:px-[10rem] py-[3rem]">
        <div className="h-[15rem] md:h-[30rem] rounded-3xl bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between lastMin"></div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Last-Minute Flight Tickets Made Affordable</h1>
          <p>
            We understand the unpredictable nature of last-minute travel plans, which is why FarePerfect is dedicated to
            providing stress-free and budget-friendly booking solutions for spontaneous trips. Whether you're planning a
            spontaneous domestic getaway, a short-haul adventure, or an impromptu international journey, rest assured,
            FarePerfect has your back with our exclusive last-minute flight deals.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">How to Find Last-Minute Cheap Flights with FarePerfect?</h1>
          <p>
            Step 1: Embrace Flexibility: Flexibility is key when it comes to securing last-minute flights at great
            prices. Consider being open to flying late or opting for red-eye flights, which often come with more
            affordable price tags compared to daytime options. While it may require sacrificing some sleep, the savings
            can be well worth it
          </p>
          <p>
            Step 2: Leverage Your Airline Miles: Don't underestimate the value of your accumulated airline miles. By
            preserving your air miles for those spontaneous travel needs, you can enjoy significant savings on
            last-minute flights. Whether it's a short domestic hop or an international journey, your airline miles can
            serve as a valuable resource, making those impromptu trips more budget-friendly.
          </p>
          <p>
            Step 3: Explore Multiple Destinations: Keeping an open mind about your destination can lead to exciting
            opportunities and great deals. By considering multiple locations for your last-minute getaway, you increase
            your chances of finding the perfect flight deal with FarePerfect. Whether you're in the mood for a beach
            escape, a city adventure, or a mountain retreat, our extensive network of flights offers something for every
            traveler.
          </p>
          <p>
            Step 4: Opt for Budget-Friendly Airlines: When booking last-minute flights, consider flying with low-cost
            carriers to maximize your savings. While budget airlines may offer fewer amenities compared to their
            full-service counterparts, they often provide significantly cheaper ticket options. By prioritizing your
            budget and flexibility, you can enjoy more affordable fares without sacrificing the quality of your travel
            experience.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">How Late Can You Book a Flight?</h1>
          <p>
            While specific policies may vary among airlines, as a general rule, you can typically book a flight up to
            two hours before the scheduled departure time. This flexibility allows travelers to make spontaneous
            decisions and embark on last-minute adventures with ease. However, it's essential to note that availability
            may be limited closer to the departure time, so quick decision-making is key when booking last-minute
            flights.
          </p>
          <p>
            Ready to embark on your spontaneous adventure? Explore our extensive range of last-minute flight deals at
            FarePerfect and turn your travel dreams into reality without breaking the bank. With our user-friendly
            booking platform and unbeatable prices, planning your next spontaneous getaway has never been easier.
          </p>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default LastMinuteFlights;
