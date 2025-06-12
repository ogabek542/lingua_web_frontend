import React, {
  forwardRef,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useMemo,
} from "react";
import { GoArrowRight } from "react-icons/go";
import ByLanguage from "../AdditionScreens/ByLanguage";
import ByDocument from "../AdditionScreens/ByDocument";
import ByCase from "../AdditionScreens/ByCase";
import ByIndustry from "../AdditionScreens/ByIndustry";
import { useTranslation } from "react-i18next";

// SOLUTION 1: Configuration-based approach with constants
const MENU_CONFIG = {
  RESET_DELAY: 200,
  ANIMATION_DURATION: 300,
};

// SOLUTION 2: Find default dynamically

// SOLUTION 3: Main component with multiple optimization approaches
export const Menu1 = forwardRef(
  ({
    defaultActiveIndex = 0,
    resetOnMouseLeave = true,
    animationDuration = MENU_CONFIG.ANIMATION_DURATION,
  }, ref) => {
    const { t } = useTranslation();
    const [activeIdx, setActiveIdx] = useState(defaultActiveIndex);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("auto");
    const resetTimeoutRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const menuScreens = useMemo(
      () => [
        {
          id: "by-language",
          label: t("by_language"),
          Screen: ByLanguage,
          isDefault: true,
        },
        {
          id: "by-document",
          label: t("by_document"),
          Screen: ByDocument,
          isDefault: false,
        },
        {
          id: "use-case",
          label: t("use_case"),
          Screen: ByCase,
          isDefault: false,
        },
        {
          id: "by-industry",
          label: t("by_industry"),
          Screen: ByIndustry,
          isDefault: false,
        },
      ],
      [t]
    );

    // Check for mobile viewport
    useLayoutEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Height calculation with debounce
    useLayoutEffect(() => {
      if (!contentRef.current || isMobile) {
        setHeight("auto");
        return;
      }

      const updateHeight = () => {
        const newHeight = contentRef.current?.scrollHeight || "auto";
        setHeight(typeof newHeight === "number" ? `${newHeight}px` : newHeight);
      };

      const debounceTimer = setTimeout(updateHeight, 50);
      return () => clearTimeout(debounceTimer);
    }, [activeIdx, isMobile]);

    const handleReset = useCallback(() => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      setActiveIdx(defaultActiveIndex);
    }, [defaultActiveIndex]);

    const handleMouseEnter = useCallback((idx) => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      if (idx >= 0 && idx < menuScreens.length) {
        setActiveIdx(idx);
      }
    }, [menuScreens.length]);

    // Cleanup on unmount
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
        onMouseLeave={resetOnMouseLeave && !isMobile ? handleReset : undefined}
      >
        <div className="flex flex-col lg:flex-row w-full lg:min-h-[450px]">
          {/* LEFT MENU */}
          <aside className="w-full lg:w-1/5 bg-[#F0F0EB] flex flex-col gap-2 p-4 lg:min-h-[450px]">
            {menuScreens.map((item, idx) => {
              const isActive = activeIdx === idx;
              const isDefault = item.isDefault;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMouseEnter(idx)}
                  onMouseEnter={!isMobile ? () => handleMouseEnter(idx) : undefined}
                  className={
                    `group flex items-center justify-between p-2 rounded-lg transition-all duration-300 ` +
                    (isActive
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-600 hover:bg-white hover:shadow-sm")
                  }
                  aria-label={`${item.label} ${isDefault ? "(default)" : ""}`}
                  aria-pressed={isActive}
                >
                  <span
                    className={
                      `text-base font-medium transition-colors duration-300 ` +
                      (isActive
                        ? "text-black font-semibold"
                        : "text-gray-400 group-hover:text-black") +
                      (isDefault && !isActive ? " text-blue-600" : "")
                    }
                  >
                    {item.label}
                  </span>
                  <GoArrowRight
                    className={
                      `text-2xl transition-all duration-300 ` +
                      (isActive
                        ? "opacity-100 translate-x-1 text-black"
                        : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-gray-400")
                    }
                  />
                </button>
              );
            })}
          </aside>

          {/* RIGHT SCREEN */}
          <main 
            ref={contentRef}
            className="w-full lg:w-4/5 bg-white"
            style={{
              height,
              transition: `height ${animationDuration}ms ease-in-out`,
            }}
          >
            {(() => {
              const CurrentScreen = menuScreens[activeIdx]?.Screen;
              return CurrentScreen ? <CurrentScreen /> : null;
            })()}
          </main>
        </div>
      </section>
    );
  }
);

Menu1.displayName = "Menu1";

export default Menu1;

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
            {t("default_by_language")}
          </div>
          {menuScreens.map((item, idx) => (
            <button
              key={item.label}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`
                group flex items-center justify-between p-2 rounded-lg transition-colors
                ${
                  activeIdx === idx
                    ? "bg-white text-black"
                    : "text-gray-600 hover:bg-white"
                }
                ${idx === BY_LANGUAGE_INDEX ? "ring-1 ring-blue-200" : ""}
              `}
            >
              <span
                className={`
                  text-base font-medium transition-colors
                  ${
                    activeIdx === idx
                      ? "text-black"
                      : "text-gray-400 group-hover:text-black"
                  }
                `}
              >
                {item.label}
              </span>
              <GoArrowRight
                className={`
                  text-2xl transition-transform duration-300
                  ${
                    activeIdx === idx
                      ? "opacity-100 translate-x-1 text-black"
                      : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-gray-400"
                  }
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
