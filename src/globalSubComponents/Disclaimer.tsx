import Intro from "./Intro";
import { useDispatch } from "react-redux";
import { updateTab } from "../store/curTabSlice";
import "./Disclaimer.css";

export const Disclaimer = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Disclaimer"));
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Intro des="Disclaimer" />
      <div className="flex flex-col bg-white  md:px-[4rem] px-[0.7rem] items-center gap-3">
        <div className="h-[15rem] md:h-[30rem] rounded-3xl flex flex-col mt-5 justify-between Disclaimer w-[90%]"></div>
        <div className="h-auto w-full p-4 text-start rounded-md flex flex-col gap-3 md:px-[5rem]">
          <p>
            The information, software, products, and services published on this website (Tripcanny) may contain
            inaccuracies or errors, including pricing errors. Tripcanny and its affiliates do not guarantee the accuracy
            of any information or descriptions related to airfare, cruises, car rentals, or other travel products and
            services displayed on this website (including, but not limited to, pricing, pictures, general product
            descriptions, etc.). Tripcanny expressly reserves the right to modify or correct any pricing errors on our
            website and/or cancel reservations made under an inaccurate price. In such cases, we will, if possible,
            offer you the option to keep your reservation at the correct price or cancel it without penalty.
          </p>
          <h1 className="font-bold text-xl">Ratings:</h1>
          <p>
            Ratings displayed on this website are intended as general guidelines only, and Tripcanny and its affiliates
            do not guarantee their accuracy. Tripcanny and its affiliates, along with their respective suppliers, make
            no guarantees about the availability of specific products or services. Tripcanny and its affiliates, along
            with their respective suppliers, may modify or correct information on the website at any time.
          </p>
          <h1 className="font-bold text-xl">Information and Service Suitability:</h1>
          <p>
            Tripcanny and its affiliates, along with their respective suppliers, make no representations about the
            suitability of the information, software, products, and services mentioned on this website for any purpose.
            The inclusion or offering of any products or services on this website does not constitute an endorsement or
            recommendation of such products or services by Tripcanny or its affiliates. All information, software,
            products, and services are provided "as is" without warranty of any kind. Tripcanny and its affiliates,
            along with their respective suppliers, disclaim all warranties and conditions that this website, its
            servers, or any emails sent from Tripcanny and its affiliates are free of viruses or other harmful
            components. Tripcanny, its affiliates, and their respective suppliers hereby disclaim all warranties and
            conditions with regard to the information, software, products, and services, including all implied
            warranties and conditions of merchantability, fitness for a particular purpose, title, and non-infringement.
          </p>
          <h1 className="font-bold text-xl">Independent Contractors :</h1>
          <p>
            The carriers and other suppliers that provide travel or other services on this website operate as
            independent contractors and are not agents or employees of Tripcanny or any of its affiliates. Tripcanny and
            its affiliates are not liable for the errors, acts, omissions, warranties, representations, breaches, or
            negligence of any such supplier or for any personal injury, death, property damage, or other damages or
            expenses resulting therefrom. Tripcanny and its affiliates have no liability and will not make any refunds
            in the event of delay, overbooking, cancellation, strike, or any other cause beyond their direct control.
            They are also not responsible for any additional expense, omission, delay, rerouting, or acts carried out by
            any government organization or authority.
          </p>

          <h1 className="font-bold text-xl">Limitation of Liability:</h1>
          <p>
            Tripcanny and its affiliates, along with their respective suppliers, shall not be liable for any direct,
            indirect, punitive, incidental, special, or consequential damages arising out of, or in any way associated
            with, your access, display, or use of this website or with the delay or inability to access, display, or use
            this website (including, but not limited to, your reliance on opinions appearing on this website; any
            computer virus, information, software, linked site(s), products, and services obtained through this website;
            or otherwise arising out of the access to, display, or use of this website) whether based on a theory of
            negligence, contract, tort, strict liability, consumer protection laws, or otherwise, even if Tripcanny and
            its affiliates, along with their respective suppliers, have been advised of the possibility of such damages.
          </p>

          <h1 className="font-bold text-xl">Security of Your Information</h1>
          <p>
            We store your personal information in secure computer systems, electronic databases, digital records, and
            telephone recordings.
          </p>
          <p>
            If, despite the limitation above, Tripcanny and its affiliates, along with their respective suppliers, are
            found liable for any loss or damage arising out of, or in any way associated with, any of the occurrences
            described above, then in no event shall the liability of Tripcanny and its affiliates, along with their
            respective suppliers, exceed, in the aggregate, the greater of (a) the service fee you paid to Tripcanny in
            connection with such transaction(s) made on this website.
          </p>

          <p>
            This limitation of liability reflects the allocation of risk between the parties. The limitations specified
            in this section will survive and apply even if any limited remedy specified in these Terms and Conditions is
            found to have failed of its essential purpose. The limitations of liability provided in these Terms and
            Conditions inure to the benefit of Tripcanny and its affiliates, along with their respective suppliers.
          </p>
        </div>
      </div>
    </>
  );
};
