import { useDispatch } from "react-redux";
import { updateTab } from "../store/curTabSlice";
import Intro from "./Intro";
import Subscribe from "./Subscribe";
import "./LastMin.css";
const title = { des: "Refund Policy" };

const refund = [
  {
    heading: "Cancellation Period : ",
    content: [
      "Customers are eligible for a full refund if they cancel their booking within 24 to 48 hours of making the reservation, depending on the specific service or booking.",
      "The cancellation period may vary for different types of bookings, such as flights, hotels, or vacation packages.",
      "Refunds requested after the cancellation period may be subject to penalties or fees as outlined in the booking terms and conditions.",
    ],
  },
  {
    heading: "Refund Eligibility : ",
    content: [
      "Refunds are granted based on the terms and conditions associated with the specific booking.",
      "Customers must meet the eligibility criteria outlined in the booking terms to qualify for a refund.",
      "Refund eligibility may depend on factors such as the reason for cancellation, the timing of the cancellation, and any applicable restrictions or penalties.",
    ],
  },
  {
    heading: "Processing Time : ",
    content: [
      "Refunds are typically processed within 7 to 14 business days after the cancellation request is approved.",
      "The processing time may vary depending on factors such as the payment method used and the specific policies of the payment processor or financial institution.",
      "Customers will receive notification once the refund has been processed, along with any relevant details such as the refund amount and expected timeline for receipt.",
    ],
  },
  {
    heading: "Partial Refunds : ",
    content: [
      "In some cases, customers may be eligible for a partial refund based on the services rendered or any applicable fees.",
      "Partial refunds may be issued for unused portions of services or for cancellations made after the initial cancellation period.",
      "The amount of the partial refund will be determined based on the specific terms and conditions of the booking and any applicable refund policies.",
    ],
  },
  {
    heading: "Exceptions : ",
    content: [
      "Certain bookings or services may have specific refund policies or restrictions that differ from the general policy.",
      "Customers are advised to review the terms and conditions associated with their booking for any applicable exceptions or special considerations.",
      "Exceptions may include non-refundable bookings, promotional offers, or special event bookings with unique cancellation policies.",
    ],
  },
  {
    heading: "Customer Support : ",
    content: [
      "Our customer support team is available to assist customers with refund inquiries and provide guidance throughout the refund process.",
      "Customers can contact customer support via phone, email, or live chat for assistance with refund requests, questions about refund eligibility, or any other related concerns.",
      "Our goal is to ensure that customers receive prompt and helpful assistance with their refund inquiries and that any issues or concerns are addressed in a timely manner.",
    ],
  },
  {
    heading: "Policy Updates : ",
    content: [
      "We reserve the right to update or modify our refund policy at any time.",
      "Any changes to the refund policy will be communicated to customers through our website, email, or other appropriate channels.",
      "Customers are encouraged to review the refund policy periodically for any updates or changes that may affect their bookings or refund eligibility.",
    ],
  },
];


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
      <div className="flex flex-col bg-white  md:px-[4rem] px-[0.7rem] items-center gap-3">
        <div className="h-[15rem] md:h-[30rem] rounded-3xl flex flex-col mt-5 justify-between lastMin w-[90%]"></div>
        <div className="h-auto w-full p-4 text-start rounded-md flex flex-col gap-3 md:px-[5rem]">
          <p>
            This Refund Policy outlines our guidelines and procedures regarding refunds for purchases made through our
            Service. It informs you about your rights concerning refunds and how we handle refund requests. We aim to
            ensure transparency and fairness in our refund processes. By engaging with our Service and making purchases,
            you agree to abide by the terms outlined in this Refund Policy.
          </p>
          {refund.map((data, index) => (
            <div className="flex flex-col gap-[0.5rem]">
              <h1 className="font-bold text-2xl ">{data.heading}</h1>
              <ul>
                {data.content.map((cont, ind) => (
                  <li className="text-sm list-disc list-inside">{cont}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-[3rem]">
            This detailed refund policy aims to provide customers with clear and comprehensive information regarding
            refund processes, eligibility criteria, and other important considerations. If customers have any questions
            or require further clarification, they are encouraged to contact our customer support team for assistance.
          </p>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default LastMinuteFlights;
