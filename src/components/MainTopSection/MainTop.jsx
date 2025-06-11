import React from "react";
import MainRightImage from "../../assets/home-heading_header.webp";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainTop = () => {
  const naviagte = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full h-auto p-4 sm:p-6 md:p-8 lg:px-14 xl:px-16 ">
      {/* left side */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-2 lg:order-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight max-w-full lg:max-w-xl">
          {t("online_translation_service_text")}
          <span
            className="mx-1 sm:mx-2"
            style={{
              background: "linear-gradient(to right, #849DC0 0%, #CAB17C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("you_can_count_text")}
          </span>
        </h2>
        <p className="w-full text-base sm:text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
          {t("get_your_documents_description")}
        </p>
        <div className="flex items-start w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <button
            onClick={() => naviagte("/order")}
            className="capitalize bg-[#083473] hover:bg-[#062b5e] active:bg-[#051f47] text-white rounded-full px-2 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 w-full font-semibold text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t("start_order_text")}
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] order-1 lg:order-2">
        <img
          className="w-full h-full object-contain"
          src={MainRightImage}
          alt="Translation services illustration"
        />
      </div>
    </div>
  );
};

export default MainTop;
