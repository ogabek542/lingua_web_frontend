import React from "react";
import { GoArrowRight } from "react-icons/go";

const ModalDefaultScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white/50 backdrop-blur-xs flex lg:hidden flex-col h-screen p-4 pt-0">
      {/* Navigation links */}
      <div className="container flex-1 flex flex-col items-start w-full gap-4 bg-white pt-4">
        {["Services", "Solutions", "Resources", "Company"].map((item) => (
          <div
            key={item}
            className="flex items-baseline justify-between w-full cursor-pointer"
          >
            <a
              href="#"
              className="text-xl font-medium py-2 text-gray-600"
            >
              {item}
            </a>

            <GoArrowRight className="text-2xl text-gray-600" />
          </div>
        ))}
      </div>

      {/* Order button */}
      <div className="p-6 bg-white shadow-sm">
        <button className="bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-2 w-full font-semibold text-lg transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ModalDefaultScreen;
