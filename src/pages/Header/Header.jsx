import React, { useRef, useState } from "react";
import LinguaPhoto from "../../assets/linguaPhoto.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import clsx from 'clsx';
import { Menu0 } from "../../components/HeaderComponent/Menu0";
import { Menu1 } from "../../components/HeaderComponent/Menu1";
import { Menu2 } from "../../components/HeaderComponent/Menu2";
import { Menu3 } from "../../components/HeaderComponent/Menu3";


const Header = () => {
  const refs = useRef([]);
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(0);
  const [popoverHeight, setPopoverHeight] = useState(0);

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

  return (
    <nav className="container  flex items-center justify-between rounded-2xl px-2 py-1 bg-white/20 backdrop-blur sticky">
      {/* LEFT SIDE */}
      <div style={{
        left:popoverLeft || 0,
        height:popoverHeight || 0,

      }} 
      className="flex items-center gap-[100px]">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img className="w-[35px] h-[35px] object-cover" src={LinguaPhoto} alt="logo_image" />
          <a href="#">
            <p className="font-bold uppercase text-[#083473]">World Translate Service</p>
          </a>
        </div>

        {/* Navigation Links */}
        <nav
          onMouseLeave={() => setHovering(null)}
          className="flex items-center gap-2 relative"
        >
          {["Services", "Solutions", "Resources", "Company"].map((item, index) => (
            <a
              key={index}
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              href="#"
              className="flex items-center gap-1 bg-transparent hover:bg-gray-100 rounded-3xl py-2 px-3 text-gray-700 hover:text-black group"
            >
              <span className="text-[13px] capitalize">{item}</span>
              <FaAngleDown
                className="size-[12px] transition-transform duration-400"
                style={{
                  transform: hovering === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </a>
          ))}

          {hovering !== null && (
            <div
              style={{ left: popoverLeft }}
              className="absolute top-full pt-4 w-[600px] bg-white border-2 border-black rounded shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className={clsx("transition-opacity duration-300", hovering === 0 ? "opacity-100" : "opacity-0 hidden")}>
                <Menu0 />
              </div>
              <div className={clsx("transition-opacity duration-300", hovering === 1 ? "opacity-100" : "opacity-0 hidden")}>
                <Menu1 />
              </div>
              <div className={clsx("transition-opacity duration-300", hovering === 2 ? "opacity-100" : "opacity-0 hidden")}>
                <Menu2 />
              </div>
              <div className={clsx("transition-opacity duration-300", hovering === 3 ? "opacity-100" : "opacity-0 hidden")}>
                <Menu3 />
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Order Button */}
      <div className="flex items-center">
        <div className="group overflow-hidden w-[120px] hover:w-[140px] transition-all duration-300 rounded-3xl bg-[#083473] hover:bg-[#083450] cursor-pointer px-4 py-[9px] flex items-center gap-2">
          <span className="text-white font-medium whitespace-nowrap">Order Now</span>
          <FaArrowRight className="text-white opacity-0 group-hover:opacity-100 -translate-x-[10px] group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
