import Intro from "./Intro";

export const Privacy = () => {
  return (
    <>
      <Intro des="Privacy" />
      <div className="flex flex-col bg-white md:py-[2rem] md:px-[4rem] px-[0.7rem] items-center gap-3">
        <div className="h-auto w-full p-4 text-start rounded-md flex flex-col gap-3 md:p-[5rem]">
          <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
          <p>
            Welcome to FarePerfect. This privacy statement outlines the terms and conditions governing your use of our
            website. Please carefully review this privacy policy as it pertains to all aspects of your travel
            experience.
          </p>
          <p>
            At FarePerfect, we prioritize building a strong relationship between our users and the accommodations they
            require. This Privacy Statement aims to inform you about the personal information we collect from you and
            how we intend to use it. Your cooperation and openness to our processes are crucial for us to operate
            efficiently and safeguard your data.
          </p>
          <h1 className="font-bold text-xl">Purpose of Collecting Information</h1>
          <p>We collect the following categories of information from you:</p>
          <p>
            This information is necessary to register you as our user. Additionally, it enables us to notify you of any
            discounted airline tickets and ensures that only authorized individuals access our website.
          </p>
          <h1 className="font-bold text-xl">How We Utilize Your Information</h1>
          <p>
            We collect data from you, including your name and credit card information, solely for registration purposes.
            After registration, you will receive confirmation emails regarding the services you've booked.
          </p>
          <h1 className="font-bold text-xl">Cookies Policy</h1>
          <p>
            Our website uses cookies to enhance your browsing experience. These cookies help us gather information about
            our site's usage to provide you with tailored services. We use both session and persistent cookies to
            optimize our website's functionality.
          </p>

          <h1 className="font-bold text-xl">Third Party Links</h1>
          <p>
            FarePerfect is linked to third-party integrators. Users should exercise caution when interacting with these
            links. We advise against sharing personal information on external sites unless they are verified as
            travel-based. Users access external sites at their own risk.
          </p>

          <h1 className="font-bold text-xl">Security of Your Information</h1>
          <p>
            We store your personal information in secure computer systems, electronic databases, digital records, and
            telephone recordings.
          </p>

          <h1 className="font-bold text-xl">Users Rights</h1>
          <p>As a user of our website, you have the following rights:</p>

          <h1 className="font-bold text-xl">CCPA Privacy Policy Act</h1>
          <p>
            FarePerfect complies with the CCPA Privacy Policy Act, giving consumers control over their personal
            information. Users have the right to know, delete, opt-out, and non-discriminate regarding their data.
          </p>

          <h1 className="font-bold text-xl">Children’s Policy</h1>
          <p>Users under 18 must be supervised by adults when using our website.</p>

          <h1 className="font-bold text-xl">Acceptance to this Privacy Policy</h1>
          <p>
            By accessing our website, you agree to our privacy policy. If you do not agree, please refrain from using
            our services.
          </p>

          <h1 className="font-bold text-xl">Governing Law</h1>
          <p>Any unauthorized copying of our website's content may result in legal action.</p>

          <h1 className="font-bold text-xl">Contact</h1>
          <p>
            For any inquiries about our services, please email us or call our customer service team, available 24/7.
          </p>
        </div>
      </div>
    </>
  );
};
