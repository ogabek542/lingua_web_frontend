import React, { forwardRef, useRef, useState, useLayoutEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import ByLanguage from "../AdditionScreens/ByLanguage";
import ByDocument from "../AdditionScreens/ByDocument";
import ByCase from "../AdditionScreens/ByCase";
import ByIndustry from "../AdditionScreens/ByIndustry";

const menuScreens = [
  { label: "By language", Screen: ByLanguage },
  { label: "By document", Screen: ByDocument },
  { label: "By use case", Screen: ByCase },
  { label: "By industry", Screen: ByIndustry },
];

export const Menu1 = forwardRef((props, ref) => {
  const [hoveredIdx, setHoveredIdx] = useState(0); // Default to first screen
  const popoverRef = useRef(null);
  const [popoverHeight, setPopoverHeight] = useState(0);

  useLayoutEffect(() => {
    if (popoverRef.current) {
      setPopoverHeight(popoverRef.current.scrollHeight);
    }
  }, [hoveredIdx]);

  // Reset to default (By language) when mouse leaves the menu
  const handleSectionMouseLeave = () => setHoveredIdx(0);

  return (
<section
  ref={ref}
  className="w-[1500px] flex flex-col min-h-[450px] h-auto "
  onMouseLeave={handleSectionMouseLeave}
>
  <div className="flex w-full min-h-[450px] h-auto">
    {/* LEFT MENU */}
    <div className="w-1/5 bg-[#F0F0EB] flex flex-col gap-2 p-3 h-auto">
      {menuScreens.map((item, idx) => (
        <a
          key={item.label}
          href="#"
          onMouseEnter={() => setHoveredIdx(idx)}
          className={`
            group flex items-center justify-between p-2 rounded-lg
            transition-colors duration-300 ease-in-out
            ${hoveredIdx === idx ? "bg-white text-black" : "hover:bg-white text-gray-600"}
          `}
        >
          <span
            className={`
              text-base font-medium
              transition-colors duration-300 ease-in-out
              ${hoveredIdx === idx ? "text-black" : "text-gray-400 group-hover:text-black"}
            `}
          >
            {item.label}
          </span>
          <GoArrowRight
            className={`
              text-2xl font-extrabold text-gray-400
              transition-transform duration-300 ease-in-out
              ${hoveredIdx === idx ? "opacity-100 translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}
            `}
          />
        </a>
      ))}
    </div>
    {/* RIGHT SCREEN */}
    <div className="w-4/5 bg-white relative h-auto">
      <div
        className="absolute top-0 left-0 w-full transition-all overflow-hidden h-auto"
        style={{
          height: popoverHeight,
          opacity: 1,
          zIndex: 10,
        }}
      >
        <div ref={popoverRef} className="w-full h-auto">
          {React.createElement(menuScreens[hoveredIdx].Screen)}
        </div>
      </div>
    </div>
  </div>
</section>
  );
});





// className=" h-auto  w-[1535px]  flex flex-col min-h-[350px] "