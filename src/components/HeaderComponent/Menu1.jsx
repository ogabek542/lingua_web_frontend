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
  const [activeIdx, setActiveIdx] = useState(0);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [activeIdx]);

  const reset = () => setActiveIdx(0);

  return (
    <section
      ref={ref}
      className="w-full max-w-[1440px] mx-auto flex flex-col lg:min-h-[450px]"
      onMouseLeave={reset}
    >
      <div className="flex flex-col lg:flex-row w-full h-auto">
        {/* LEFT MENU */}
        <aside className="w-full lg:w-1/5 bg-[#F0F0EB] flex flex-col gap-2 p-4">
          {menuScreens.map((item, idx) => (
            <button
              key={item.label}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`
                group flex items-center justify-between p-2 rounded-lg transition-colors
                ${activeIdx === idx ? 'bg-white text-black' : 'text-gray-600 hover:bg-white'}
              `}
            >
              <span
                className={`
                  text-base font-medium transition-colors
                  ${activeIdx === idx ? 'text-black' : 'text-gray-400 group-hover:text-black'}
                `}
              >
                {item.label}
              </span>
              <GoArrowRight
                className={`
                  text-2xl transition-transform duration-300
                  ${activeIdx === idx
                    ? 'opacity-100 translate-x-1 text-black'
                    : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-gray-400'}
                `}
              />
            </button>
          ))}
        </aside>

        {/* RIGHT SCREEN */}
        <div className="w-full lg:w-4/5 bg-white relative">
          <div
            className="absolute inset-x-0 top-0 overflow-hidden transition-[height] duration-300"
            style={{ height: height }}
          >
            <div ref={contentRef} className="p-4">
              {React.createElement(menuScreens[activeIdx].Screen)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
