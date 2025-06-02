import React from "react";
import MainRightImage from "../../assets/home-heading_header.webp";

const MainTop = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-auto p-4 px-6">
      {/* left side */}
      <div className="w-1/2 flex flex-col gap-4">
        <h2 className="text-4xl w-full">
          Online translation services you can count on.
        </h2>
        <p className="w-full text-md">
          Get your documents translated and certified by a professional
          translator in 15+ languages . Our high-quality translations are
          delivered within 24 hours, ensuring a fast and hassle-free process.
        </p>
        <div className="flex items-start w-1/2 ">
          <button className="capitalize bg-[#083473] hover:bg-[#062b5e] text-white rounded-full px-6 py-2 w-full font-semibold text-lg transition cursor-pointer">
            Start Your Order
          </button>
        </div>
      </div>
      {/* right side */}
      <div className="w-1/2 h-[600px] ">
        <img
          className="w-full h-full object-contain"
          src={MainRightImage}
          alt="right_image"
        />
      </div>
    </div>
  );
};

export default MainTop;
