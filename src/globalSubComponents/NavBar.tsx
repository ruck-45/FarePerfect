// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Divider,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/logo.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";

const menuItems = ["Home", "About", "Contact", "Privacy"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const setIsMenuOpen = () => {
    dispatch(updateNavStatus(!navOpenStatus));
  };

  return (
    <>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={() => {
          dispatch(updateNavStatus(!navOpenStatus));
        }}
        className="h-[2rem] py-[1.2rem] nav z-[200] bg-[#0a97b0] justify-center hidden lg:flex"
        maxWidth="xl"
        isBordered
      >
        <NavbarContent className="hidden lg:flex" justify="center">
          <NavbarItem>
            <div className="flex flex-row gap-2">
              <MdEmail className="text-black mt-[0.1rem]" size={20} />
              <span className="text-white  text-[1rem]">Email : support@fareperfect.com</span>
            </div>
          </NavbarItem>
          <Divider orientation="vertical" className="h-6" />
          <NavbarItem>
            <div className="flex flex-row gap-2">
              <FaPhone className="text-black mt-[0.1rem]" size={18} />
              <span className="text-white text-[1rem]">Call Now : +1 (844) 671-7473</span>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex" justify="center">
          <div className="flex flex-row gap-x-4 cursor-pointer">
            <FaInstagram size={23} className="text-white" />
            <FaSquareFacebook size={23} className="text-white" />
            <FaLinkedin size={23} className="text-white" />
            <FaTwitter size={23} className="text-white" />
          </div>
        </NavbarContent>
      </Navbar>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className=" bg-white md:z-[200] h-[5rem] nav"
        maxWidth="xl"
        isBordered
      >
        <NavbarContent>
          <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-black" />
          <Link to="../Home">
            <Image width={90} src={logo} alt="logo" radius="none" className="hidden lg:block" />
          </Link>
        </NavbarContent>
        <NavbarContent className="lg:hidden logo mr-[30%]">
          <Link to="../Home">
            <Image width={90} src={logo} alt="logo" radius="none" />
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex " justify="center">
          <NavbarItem>
            <Link
              to="../Home"
              className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../About"
              className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Contact"
              className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              Contact Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Privacy"
              className={curTab === "Privacy" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              Privacy
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <a className="flex gap-[1rem]" href="tel:+1 (844) 671-7473">
              <Button
                startContent={<FaPhone />}
                variant="solid"
                color="warning"
                className="text-white hover:scale-110 bg-[#0a97b0]"
                radius="none"
              >
                Call Us
              </Button>
            </a>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-[white] mt-[4rem]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={curTab === item ? "active" : "notActive"}
                to={index === 5 ? "../Auth" : `../${item}`}
                onClick={setIsMenuOpen}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavBar;
