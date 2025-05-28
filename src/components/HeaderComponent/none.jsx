import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LinguaPhoto from "../../assets/linguaPhoto.png";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";
import { MdClose } from "react-icons/md";
import clsx from "clsx";
import {Menu0} from "../../components/HeaderComponent/Menu0";
import {Menu1} from "../../components/HeaderComponent/Menu1";
import {Menu2} from "../../components/HeaderComponent/Menu2";
import {Menu3} from "../../components/HeaderComponent/Menu3";

import UzbIcon from "../../assets/svg/uzbek.svg";
import RusIcon from "../../assets/svg/russian.svg";
import EngIcon from "../../assets/svg/british.svg";

const LANGUAGES = [
  { code: "uz", name: "Uzbek", icon: UzbIcon },
  { code: "ru", name: "Русский", icon: RusIcon },
  { code: "en", name: "English", icon: EngIcon },
];

const menuItems = [
  { name: "Services", path: "services" },
  { name: "Solutions", path: "solutions" },
  { name: "Resources", path: "resources" },
  { name: "Company", path: "company" },
];

const Header = ({ hovering, setHovering }) => {
  const refs = useRef([]);
  const [popoverLeft, setPopoverLeft] = useState(0);
  const [popoverHeight, setPopoverHeight] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const currentMenu = menuItems.find((item) => item.path === currentPath);

  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES[0]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMouseEnter = (index, event) => {
    setHovering(index);
    setPopoverLeft(event.currentTarget.offsetLeft);
    setTimeout(() => {
      const menuElement = refs.current[index];
      if (menuElement) {
        setPopoverHeight(menuElement.offsetHeight);
      }
    }, 0);
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      <nav className="container flex items-center justify-between rounded-2xl px-4 py-2 pb-3 bg-white/20 backdrop-blur-lg fixed top-0 left-1/2 transform -translate-x-1/2 z-50 border-b border-white/10 transition-all duration-300">

        <div className="flex items-center gap-2">
          {currentMenu ? (
            <>
              <MdArrowBack
                className="text-2xl cursor-pointer text-[#083473]"
                onClick={() => navigate("/modaldefault")}
              />
              <span className="text-lg font-bold text-[#083473]">
                {currentMenu.name}
              </span>
            </>
          ) : (
            <>
              <img
                className="w-[35px] h-[35px] object-cover"
                src={LinguaPhoto}
                alt="logo_image"
              />
              <a href="#">
                <p className="text-lg font-bold uppercase text-[#083473]">
                  World Translate Service
                </p>
              </a>
            </>
          )}
        </div>

        <div
          onMouseLeave={() => setHovering(null)}
          className="hidden lg:flex items-center gap-2 relative p-2 mr-[460px]"
        >
          {["Services", "Solutions", "Resources", "Company"].map(
            (item, index) => (
              <a
                key={index}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                href="#"
                className="flex items-center gap-1 bg-transparent hover:bg-gray-100 rounded-3xl py-2 px-3 text-gray-700 hover:text-black group"
              >
                <span className="text-[15px] capitalize">{item}</span>
                <FaAngleDown
                  className="size-[12px] transition-transform duration-400"
                  style={{
                    transform:
                      hovering === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </a>
            )
          )}

          {hovering !== null && (
            <div
              style={{
                left: hovering === 0 || hovering === 1 ? "100%" : popoverLeft,
                transform:
                  hovering === 0 || hovering === 1
                    ? "translateX(-50%)"
                    : "translateX(0)",
              }}
              className="absolute top-full w-auto rounded-xl shadow-2xl transition-all duration-300 overflow-hidden z-50 bg-white backdrop-blur-sm border-[1px] border-[rgba(225,223,217,1)]"
            >
              <div className={clsx("transition-opacity duration-300", hovering === 0 ? "opacity-100" : "opacity-0 hidden")}><Menu0 /></div>
              <div className={clsx("transition-opacity duration-300", hovering === 1 ? "opacity-100" : "opacity-0 hidden")}><Menu1 /></div>
              <div className={clsx("transition-opacity duration-300", hovering === 2 ? "opacity-100" : "opacity-0 hidden")}><Menu2 /></div>
              <div className={clsx("transition-opacity duration-300", hovering === 3 ? "opacity-100" : "opacity-0 hidden")}><Menu3 /></div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;



{/* <div className="flex p-4  justify-between items-center  bg-white  border-b-[1px] border-gray-300  ">
<div className="flex items-center gap-2">
  <img
    className="w-9 h-9 object-cover"
    src={LinguaPhoto}
    alt="Logo"
  />
  <a href="#">
    <p className="text-sm md:text-lg font-bold uppercase text-[#083473]">
      World Translate Service
    </p>
  </a>
</div>
<button
  className="text-2xl text-[#083473] hover:text-red-600 transition"
  onClick={() => setShowMobileMenu(false)}
  aria-label="Close menu"
>
  <MdClose />
</button>
</div>

<div className="container flex-1 flex flex-col items-start w-full gap-4 bg-white pt-4">
{["Services", "Solutions", "Resources", "Company"].map((item) => (
  <div
    key={item}
    className="flex items-baseline justify-between w-full cursor-pointer"
  >
    <a
      href="#"
      className="text-xl  font-medium  py-2 text-center text-gray-600   "
    >
      {item}
    </a>

    <GoArrowRight className="text-2xl text-gray-600" />
  </div>
))}
</div>

<div className="p-6 bg-white shadow-sm">
<button className="bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-2 w-full font-semibold text-lg transition">
  Order Now
</button>
</div> */}

{/* <div className="fixed inset-0 z-[9999] bg-white/50 backdrop-blur-xs flex lg:hidden flex-col h-screen p-4  ">
                <div className="flex justify-between items-center p-4 bg-white  border-b-[1px] border-gray-300  ">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-9 h-9 object-cover"
                      src={LinguaPhoto}
                      alt="Logo"
                    />
                    <a href="#">
                      <p className="text-sm md:text-lg font-bold uppercase text-[#083473]">
                        World Translate Service
                      </p>
                    </a>
                  </div>
                  <button
                    className="text-2xl text-[#083473] hover:text-red-600 transition"
                    onClick={() => setShowMobileMenu(false)}
                    aria-label="Close menu"
                  >
                    <MdClose />
                  </button>
                </div>

                <div className="container flex-1 flex flex-col items-start w-full gap-4 bg-white pt-4">
                  {["Services", "Solutions", "Resources", "Company"].map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline justify-between w-full cursor-pointer"
                    >
                      <a
                        href="#"
                        className="text-xl  font-medium  py-2 text-center text-gray-600   "
                      >
                        {item}
                      </a>

                      <GoArrowRight className="text-2xl text-gray-600" />
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-white shadow-sm">
                  <button className="bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-2 w-full font-semibold text-lg transition">
                    Order Now
                  </button>
                </div>
              </div> */}