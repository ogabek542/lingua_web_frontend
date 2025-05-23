import React, { useState } from "react";
import LinguaPhoto from "../../assets/linguaPhoto.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);

  return (
    <nav className="container border-1 border-red-600 flex items-center justify-between rounded-2xl px-2 py-1 bg-white/20 backdrop-blur sticky">
      {/* LEFT SIDE DIV */}
      <div className="flex items-center gap-[100px]">
        {/* logo and title */}
        <div className="flex items-center justify-between">
          <img
            className="w-[35px] h-[35px] object-cover"
            src={LinguaPhoto}
            alt="logo_image"
          />
          <a href="#">
            <p className="font-bold uppercase text-[#083473]">
              World Translate Service
            </p>
          </a>
        </div>

        {/* screen types */}
        <nav
          onMouseLeave={() => {
            setHovering(null);
          }}
          className="flex items-center justify-between gap-2 relative" // relative added here
        >
          <a
            onMouseEnter={(event) => {
              setHovering(0);
              setPopoverLeft(event.currentTarget.offsetLeft);
            }}
            onMouseLeave={() => setHovering(null)}
            href="#"
            className="cursor-pointer flex items-center justify-between gap-1 bg-transparent hover:bg-gray-100 rounded-3xl py-2 px-3 text-gray-700 hover:text-black group"
          >
            <button className="text-[13px] cursor-pointer transition-colors duration-400 capitalize">
              Services
            </button>
            <FaAngleDown
              className="size-[12px] cursor-pointer transition-transform duration-400"
              style={{
                transform: hovering === 0 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </a>

          <a
            onMouseEnter={(event) => {
              setHovering(1);
              setPopoverLeft(event.currentTarget.offsetLeft);
            }}
            onMouseLeave={() => setHovering(null)}
            href="#"
            className="cursor-pointer flex items-center justify-between gap-1 bg-transparent hover:bg-gray-100 rounded-3xl py-2 px-3 text-gray-700 hover:text-black group"
          >
            <button className="text-[13px] cursor-pointer transition-colors duration-400 capitalize">
              Solutions
            </button>
            <FaAngleDown
              className="size-[12px] cursor-pointer transition-transform duration-400"
              style={{
                transform: hovering === 1 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </a>

          <a
            onMouseEnter={(event) => {
              setHovering(2);
              setPopoverLeft(event.currentTarget.offsetLeft);
            }}
            onMouseLeave={() => setHovering(null)}
            href="#"
            className="cursor-pointer flex items-center justify-between gap-1 bg-transparent hover:bg-gray-100 rounded-3xl py-2 px-3 text-gray-700 hover:text-black group"
          >
            <button className="text-[13px] cursor-pointer transition-colors duration-400 capitalize">
              Resources
            </button>
            <FaAngleDown
              className="size-[12px] cursor-pointer transition-transform duration-400"
              style={{
                transform: hovering === 2 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </a>

          <a
            onMouseEnter={(event) => {
              setHovering(3);
              setPopoverLeft(event.currentTarget.offsetLeft);
            }}
            onMouseLeave={() => setHovering(null)}
            href="#"
            className="cursor-pointer flex items-center justify-between gap-1 bg-transparent hover:bg-gray-100 rounded-3xl py-2 px-3 text-gray-700 hover:text-black group"
          >
            <button className="text-[13px] cursor-pointer transition-colors duration-400 capitalize">
              Company
            </button>
            <FaAngleDown
              className="size-[12px] cursor-pointer transition-transform duration-400"
              style={{
                transform: hovering === 3 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </a>

          {hovering !== null && ( // <-- FIX: changed condition to correctly handle 0
            <div
              style={{ left: popoverLeft || 0 }}
              className="absolute top-full pt-6 w-[600px] bg-white border-2 border-black overflow-x-hidden rounded shadow-lg transition-all duration-300"
            >
              {/* popover content here */}
            </div>
          )}
        </nav>
      </div>

      {/* order button */}
      <div className="flex items-center justify-between">
        <div className="p-[8px] px-4 w-[50px]"></div>
        <div className="p-[8px] px-4 w-[50px]"></div>
        {/* <=== ORDER BUTTON ===> */}
        <div className="group overflow-hidden w-[120px] hover:w-[140px] transition-all duration-300 rounded-3xl bg-[#083473] hover:bg-[#083450] cursor-pointer px-4 py-[9px] flex items-center gap-2">
          <span className="text-white font-medium whitespace-nowrap">
            Order Now
          </span>
          <FaArrowRight className="text-white opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
