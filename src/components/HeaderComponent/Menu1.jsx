import React, { forwardRef, useRef, useState, useLayoutEffect, useCallback, useMemo } from "react";
import { GoArrowRight } from "react-icons/go";
import ByLanguage from "../AdditionScreens/ByLanguage";
import ByDocument from "../AdditionScreens/ByDocument";
import ByCase from "../AdditionScreens/ByCase";
import ByIndustry from "../AdditionScreens/ByIndustry";

// SOLUTION 1: Configuration-based approach with constants
const MENU_CONFIG = {
  DEFAULT_INDEX: 0, // By language
  RESET_DELAY: 200, // ms
  ANIMATION_DURATION: 300, // ms
};

const menuScreens = [
  { id: 'by-language', label: "By language", Screen: ByLanguage, isDefault: true },
  { id: 'by-document', label: "By document", Screen: ByDocument, isDefault: false },
  { id: 'by-case', label: "By use case", Screen: ByCase, isDefault: false },
  { id: 'by-industry', label: "By industry", Screen: ByIndustry, isDefault: false },
];

// SOLUTION 2: Find default dynamically
const getDefaultIndex = () => {
  const defaultItem = menuScreens.find(item => item.isDefault);
  return defaultItem ? menuScreens.indexOf(defaultItem) : 0;
};

// SOLUTION 3: Main component with multiple optimization approaches
export const Menu1 = forwardRef(({ 
  defaultActiveIndex = getDefaultIndex(), 
  resetOnMouseLeave = true,
  animationDuration = MENU_CONFIG.ANIMATION_DURATION 
}, ref) => {
  const [activeIdx, setActiveIdx] = useState(defaultActiveIndex);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("auto");
  const resetTimeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const defaultIndex = useMemo(() => defaultActiveIndex, [defaultActiveIndex]);

  // Check for mobile viewport
  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Updated height calculation
  useLayoutEffect(() => {
    if (contentRef.current) {
      if (isMobile) {
        setHeight("auto");
      } else {
        const newHeight = contentRef.current.scrollHeight;
        setHeight(`${newHeight}px`);
      }
    }
  }, [activeIdx, isMobile]);

  // SOLUTION 6: Debounced reset function
  const resetToDefault = useCallback(() => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    resetTimeoutRef.current = setTimeout(() => {
      setActiveIdx(defaultIndex);
    }, MENU_CONFIG.RESET_DELAY);
  }, [defaultIndex]);

  // SOLUTION 7: Immediate reset function (alternative)
  const immediateReset = useCallback(() => {
    setActiveIdx(defaultIndex);
  }, [defaultIndex]);

  // SOLUTION 8: Enhanced mouse enter with validation
  const handleMouseEnter = useCallback((idx) => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    if (idx >= 0 && idx < menuScreens.length) {
      setActiveIdx(idx);
    }
  }, []);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="w-full lg:w-[1440px] mx-auto flex flex-col"
      onMouseLeave={resetOnMouseLeave && !isMobile ? immediateReset : undefined}
    >
      <div className="flex flex-col lg:flex-row w-full lg:min-h-[450px]">
        {/* LEFT MENU */}
        <aside className="w-full lg:w-1/5 bg-[#F0F0EB] flex flex-col gap-2 p-4 lg:min-h-[450px]">
          {menuScreens.map((item, idx) => {
            const isActive = activeIdx === idx;
            const isDefault = idx === defaultIndex;
            
            return (
              <button
                key={item.id}
                onClick={() => handleMouseEnter(idx)}
                onMouseEnter={!isMobile ? () => handleMouseEnter(idx) : undefined}
                className={`
                  group flex items-center justify-between p-2 rounded-lg transition-all duration-300
                  ${isActive 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:bg-white hover:shadow-sm'
                  }
                  ${isDefault && !isActive ? 'border-l-2 border-blue-400' : ''}
                `}
                aria-label={`${item.label} ${isDefault ? '(default)' : ''}`}
                aria-pressed={isActive}
              >
                <span
                  className={`
                    text-base font-medium transition-colors duration-300
                    ${isActive 
                      ? 'text-black font-semibold' 
                      : 'text-gray-400 group-hover:text-black'
                    }
                    ${isDefault && !isActive ? 'text-blue-600' : ''}
                  `}
                >
                  {item.label}
                  {isDefault && (
                    <span className="ml-1 text-xs text-blue-500 opacity-70">●</span>
                  )}
                </span>
                <GoArrowRight
                  className={`
                    text-2xl transition-all duration-300
                    ${isActive
                      ? 'opacity-100 translate-x-1 text-black'
                      : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-gray-400'}
                  `}
                />
              </button>
            );
          })}
        </aside>

        {/* RIGHT SCREEN */}
        <div className="w-full lg:w-4/5 bg-white relative">
          <div
            className={`w-full transition-all duration-300 ease-in-out ${!isMobile ? 'absolute inset-x-0 top-0' : ''}`}
            style={{ 
              height: height,
              transitionDuration: `${animationDuration}ms`
            }}
          >
            <div ref={contentRef} className="p-4">
              {menuScreens[activeIdx]?.Screen ? (
                React.createElement(menuScreens[activeIdx].Screen)
              ) : (
                <div className="flex items-center justify-center h-32 text-gray-500">
                  Content not available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="hidden lg:flex justify-center mt-2 space-x-1">
        {menuScreens.map((_, idx) => (
          <div
            key={idx}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${idx === activeIdx 
                ? 'bg-blue-500 scale-125' 
                : idx === defaultIndex 
                  ? 'bg-blue-300' 
                  : 'bg-gray-300'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
});

// SOLUTION 11: Alternative Menu1 with explicit default management
export const Menu1Alternative = forwardRef((props, ref) => {
  const BY_LANGUAGE_INDEX = 0;
  const [activeIdx, setActiveIdx] = useState(BY_LANGUAGE_INDEX);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Force default on component mount/remount
  React.useEffect(() => {
    setActiveIdx(BY_LANGUAGE_INDEX);
  }, []);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [activeIdx]);

  const resetToByLanguage = () => setActiveIdx(BY_LANGUAGE_INDEX);

  return (
    <section
      ref={ref}
      className="w-full lg:w-[1440px] mx-auto flex flex-col lg:min-h-[450px]"
      onMouseLeave={resetToByLanguage}
    >
      <div className="flex flex-col lg:flex-row w-full h-auto">
        <aside className="w-full lg:w-1/5 bg-[#F0F0EB] flex flex-col gap-2 p-4 lg:min-h-[450px]">
          <div className="text-xs text-gray-500 mb-2 px-2">
            Default: By language
          </div>
          {menuScreens.map((item, idx) => (
            <button
              key={item.label}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`
                group flex items-center justify-between p-2 rounded-lg transition-colors
                ${activeIdx === idx ? 'bg-white text-black' : 'text-gray-600 hover:bg-white'}
                ${idx === BY_LANGUAGE_INDEX ? 'ring-1 ring-blue-200' : ''}
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

// SOLUTION 12: Hook-based approach for reusability
export const useMenuDefault = (defaultIndex = 0) => {
  const [activeIdx, setActiveIdx] = useState(defaultIndex);
  
  const resetToDefault = React.useCallback(() => {
    setActiveIdx(defaultIndex);
  }, [defaultIndex]);

  const setActive = React.useCallback((index) => {
    if (index >= 0 && index < menuScreens.length) {
      setActiveIdx(index);
    }
  }, []);

  return { activeIdx, setActive, resetToDefault };
};