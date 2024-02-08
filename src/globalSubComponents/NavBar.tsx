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
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/logo.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";

const menuItems = ["Home", "About", "Contact"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const setIsMenuOpen = () => {
    dispatch(updateNavStatus(!navOpenStatus));
  };

  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-white h-[8rem] nav"
      maxWidth="xl"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-black" />
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" className="hidden lg:block" />
        </Link>
      </NavbarContent>
      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" />
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
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a className="flex gap-[1rem]" href="tel:+1 (888) 891-7176">
            <Button isIconOnly variant="solid" color="warning" className="w-[3rem] h-[3rem] text-[1.5rem]">
              <FaPhone />
            </Button>
            <div>
              <p>Call us for Lowest Airfares</p>
              <p>+1 (888) 891-7176</p>
            </div>
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
  );
};

export default NavBar;
