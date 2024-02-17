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
    <div className="bg-white px-[3rem] lg:px-[8rem]   flex flex-col items-start py-[1rem]  gap-[1rem] ">
      <div >
        <h1 className="text-[2rem] text-black font-semibold ">CONTACT US</h1>
      </div>
      <form className="flex flex-col gap-[1rem] items-start w-[100%] grow" ref={form}>
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Your Name"
          variant="bordered"
          name="subject"
          radius="none"
        />
        <Input
          type="number"
          classNames={{ input: "text-black" }}
          label="Phone Number"
          variant="bordered"
          name="subject"
          radius="none"
        />
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Subject"
          variant="bordered"
          name="subject"
          radius="none"
        />
        <Textarea
          label="Message"
          name="message"
          variant="bordered"
          classNames={{ input: "text-black" }}
          radius="none"
        />
        <Button
          variant="shadow"
          radius="none"
          className="w-[12rem] h-[3rem]  text-white bg-[#0a97b0]"
          endContent={<IoSend className="mt-[0.2rem]" />}
          //   onClick={sendEmail}
        >
          Send
        </Button>
        {/* <Toaster /> */}
      </form>
    </div>
  );
};

export default EmailForm;