// Dependencies
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useState, useRef, FormEvent } from "react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster, ToastPosition } from "react-hot-toast";

const emailRe: RegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
// const toastSetting: {
//   position: ToastPosition;
// } = { position: "top-center" };

// const formNotFill = (): string => toast.error("Please Fill The Form Correctly", toastSetting);
// const emailSent = (): string => toast.success("Email Sent", toastSetting);
// const emailNotSent = (): string => toast.error("Email Not Sent", toastSetting);

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const email = useRef<string>("");

  const [emailValidity, setEmailValidity] = useState<boolean>(false);

  const [emailState, setEmailState] = useState<number>(-1);
  const [userNameState, setUserNameState] = useState<number>(-1);

  //   const sendEmail = async () => {
  //     try {
  //       if (!emailValidity && userNameState > 0 && emailState > 0) {
  //         await emailjs.sendForm(
  //           `${process.env.REACT_APP_SERVICE_ID}`,
  //           `${process.env.REACT_APP_TEMPLATE_ID}`,
  //           form.current!,
  //           `${process.env.REACT_APP_PUBLIC_KEY}`
  //         );
  //         emailSent();
  //       } else {
  //         formNotFill();
  //       }
  //     } catch (error) {
  //       emailNotSent();
  //     }
  //   };

  const checkEmail = (event: FormEvent<HTMLInputElement>) => {
    email.current = event.currentTarget.value;
    setEmailState(event.currentTarget.value.length);

    const validity = email.current.match(emailRe);
    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  return (
    <div className="bg-white px-[3rem] md:px-[8rem] py-[5rem]  flex flex-col items-center  gap-[2rem] lg:gap-[5rem]">
      <div className="text-white flex flex-col gap-[1rem]">
        <h1 className="text-[3rem] text-black ">Email Us</h1>
      </div>
      <form className="flex flex-col gap-[1rem] items-center lg:w-[100%] grow" ref={form}>
        <div className="flex gap-[1rem] w-full">
          <Input
            type="text"
            label="Name"
            variant="bordered"
            color="warning"
            name="name"
            radius="none"
            onChange={(event) => setUserNameState(event.currentTarget.value.length)}
            errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
            isInvalid={userNameState === 0}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            variant="bordered"
            color="warning"
            radius="none"
            onChange={checkEmail}
            isInvalid={emailValidity}
            errorMessage={emailValidity ? "Please enter a valid Email" : ""}
          />
        </div>
        <Input type="text" label="Subject" variant="bordered" color="warning" name="subject" radius="none" />
        <Textarea label="Message" name="message" variant="bordered" color="warning" radius="none" />
        <Button
          color="warning"
          variant="shadow"
          radius="none"
          className="w-[10rem] text-white"
          endContent={<IoSend className="mt-[0.2rem]" />}
          //   onClick={sendEmail}
        >
          Send Message
        </Button>
        {/* <Toaster /> */}
      </form>
    </div>
  );
};

export default EmailForm;
