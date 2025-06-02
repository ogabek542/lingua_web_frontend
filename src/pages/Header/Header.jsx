import React, { useRef, useState, useEffect } from "react";
import LinguaPhoto from "../../assets/linguaPhoto.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

import clsx from "clsx";
import { Menu0 } from "../../components/HeaderComponent/Menu0";
import { Menu1 } from "../../components/HeaderComponent/Menu1";
import { Menu2 } from "../../components/HeaderComponent/Menu2";
import { Menu3 } from "../../components/HeaderComponent/Menu3";

import UzbIcon from "../../assets/svg/uzbek.svg";
import RusIcon from "../../assets/svg/russian.svg";
import EngIcon from "../../assets/svg/british.svg";

const LANGUAGES = [
  { code: "uz", name: "Uzbek", icon: UzbIcon },
  { code: "ru", name: "Русский", icon: RusIcon },
  { code: "en", name: "English", icon: EngIcon },
];

// Define menuItems that was missing
const menuItems = [
  { name: "Services", path: "services", component: Menu0 },
  { name: "Solutions", path: "solutions", component: Menu1 }, // This will show "By language" by default
  { name: "Resources", path: "resources", component: Menu2 },
  { name: "Company", path: "company", component: Menu3 },
];

const Header = ({ hovering, setHovering }) => {
  const refs = useRef([]);
  const timeoutRef = useRef();
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES[0]);
  const [popoverLeft, setPopoverLeft] = useState(0);
  const [popoverHeight, setPopoverHeight] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = (index, event) => {
    setHovering(index);
    setPopoverLeft(event.currentTarget.offsetLeft);
    // Wait for the DOM to render if needed
    setTimeout(() => {
      const menuElement = refs.current[index];
      if (menuElement) {
        setPopoverHeight(menuElement.offsetHeight);
      }
    }, 0); // Small delay ensures rendering is done
  };

  const handleLanguageMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLanguageMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setOpen(false);
    // Replace this with your actual i18n logic
    alert(`Language changed to ${lang.name}`);
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleBackToMainMenu = () => {
    setSelectedMenuItem(null);
  };

  const handleCloseModal = () => {
    setShowMobileMenu(false);
    setSelectedMenuItem(null);
  };

  return (
    <div className="relative container flex items-center justify-center w-full">
      <nav className="container flex items-center justify-between rounded-xl px-2   bg-white/20 backdrop-blur-lg fixed top-0 left-1/2 transform -translate-x-1/2 z-50 border-b border-white/10 transition-all duration-300">
        {/* LEFT SIDE */}
        <div
          style={{
            left: popoverLeft || 0,
            height: popoverHeight || 0,
          }}
          className="flex items-center gap-[100px]"
        >
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-1">
            <img
              className="w-[35px] h-[35px] object-cover"
              src={LinguaPhoto}
              alt="logo_image"
            />
            <a href="#">
              <p className="block md:block lg:block text-sm sm:text-xs md:text-lg font-bold uppercase text-[#083473]">
                World Translate Service
              </p>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          onMouseLeave={() => setHovering(null)}
          className="hidden lg:flex items-center gap-2 relative p-2 mr-[460px] w-"
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
              {/* Menu0 - Services */}
              <div
                className={clsx(
                  "transition-opacity duration-300 h-auto",
                  hovering === 0 ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                <Menu0 />
              </div>

              {/* Menu1 - Solutions (will show "By language" by default) */}
              <div
                className={clsx(
                  "transition-opacity duration-300",
                  hovering === 1 ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                <Menu1 />
              </div>

              {/* Menu2 - Resources */}
              <div
                className={clsx(
                  "transition-opacity duration-300",
                  hovering === 2 ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                <Menu2 />
              </div>

              {/* Menu3 - Company */}
              <div
                className={clsx(
                  "transition-opacity duration-300",
                  hovering === 3 ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                <Menu3 />
              </div>
            </div>
          )}
        </div>

        {/* HAMBURGER ICON */}
        <button
          className="text-2xl text-[#083473] block lg:hidden cursor-pointer m-4"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <GiHamburgerMenu className="text-2xl text-[#083473] block lg:hidden cursor-pointer" />
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {/* language context */}
          <div className="relative" onMouseLeave={handleLanguageMouseLeave}>
            <button
              onMouseEnter={handleLanguageMouseEnter}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-[1px] border-gray-300 bg-white shadow-sm hover:bg-gray-100 transition cursor-pointer"
            >
              <img
                src={currentLanguage.icon}
                alt={currentLanguage.name}
                className="w-5 h-5"
              />
              <span className="font-medium text-gray-700">
                {currentLanguage.name}
              </span>
              <FaAngleDown className="text-gray-500 transition-transform duration-300" />
            </button>
            {open && (
              <div
                className="absolute  top-full left-[8px] mt-2 rounded-xl bg-white shadow-xl z-50 animate-fade-in-down"
                onMouseEnter={handleLanguageMouseEnter}
                onMouseLeave={handleLanguageMouseLeave}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang)}
                    className={clsx(
                      "flex rounded-2xl  gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition w-full text-left border-[1px] border-gray-100 cursor-pointer",
                      currentLanguage.code === lang.code && "bg-white"
                    )}
                  >
                    <img src={lang.icon} alt={lang.name} className="w-5 h-5" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* order button */}
          <div className="group overflow-hidden w-[120px] hover:w-[140px] transition-all duration-300 rounded-3xl bg-[#083473] hover:bg-[#083450] cursor-pointer px-4 py-[9px] flex items-center gap-2">
            <span className="text-white font-medium whitespace-nowrap">
              Order Now
            </span>
            <FaArrowRight className="text-white opacity-0 group-hover:opacity-100 -translate-x-[10px] group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {showMobileMenu && (
          <div className="w-full h-full">
            <div className="fixed inset-0 bg-white/50 backdrop-blur-md z-[9999] flex flex-col h-screen">
              <div className="flex p-4 justify-between items-center bg-white border-b border-gray-300">
                {selectedMenuItem ? (
                  // Back navigation header
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleBackToMainMenu}
                      className="text-2xl text-[#083473] hover:text-gray-600 transition"
                    >
                      <MdArrowBack />
                    </button>
                    <span className="text-lg font-bold text-[#083473]">
                      {selectedMenuItem.name}
                    </span>
                  </div>
                ) : (
                  // Logo and title (default view)
                  <div className="flex items-center gap-2">
                    <img className="w-9 h-9" src={LinguaPhoto} alt="Logo" />
                    <span className="text-lg font-bold uppercase text-[#083473]">
                      World Translate Service
                    </span>
                  </div>
                )}

                <button
                  className="text-2xl text-[#083473] hover:text-red-600 transition"
                  onClick={handleCloseModal}
                >
                  <MdClose />
                </button>
              </div>

              {/* Conditional rendering of menu or screen */}
              <div className="container flex-1 overflow-y-auto bg-white pt-4">
                {selectedMenuItem ? (
                  // Display selected menu component (Menu1 will show "By language" by default)
                  <div className="p-4">
                    {React.createElement(selectedMenuItem.component)}
                  </div>
                ) : (
                  // Default menu links
                  <div className="flex flex-col gap-4 px-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleMenuItemClick(item)}
                        className="flex justify-between items-center text-xl font-medium text-gray-600 py-2 border-b hover:bg-gray-100 rounded transition"
                      >
                        {item.name}
                        <GoArrowRight className="text-2xl" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 bg-white shadow-sm">
                <button className="bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-2 w-full font-semibold text-lg transition">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
