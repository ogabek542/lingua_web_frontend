import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import WorlImage from "../../assets/image_world.jpg";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MiddleSection = () => {
  const naviagte = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="container flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-10 px-4">
      <p className="w-full max-w-3xl text-center text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
        {t("hight_quality_translations_text")}
      </p>
      <p className="w-full max-w-2xl text-center text-sm md:text-base lg:text-lg text-gray-600">
        {t("premium_offer_text")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-7xl px-4">
        {/* Certified Translation Card */}
        <div className="p-6 rounded-xl bg-[linear-gradient(to_top_right,rgba(91,64,27,1),rgba(32,42,50,1))] flex flex-col gap-4">
          <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
            {t("certified_translation")}
          </h2>
          <p className="text-white font-semibold text-sm md:text-base lg:text-lg">
            {t("certifield_translation_description")}
          </p>
          <div>
            <button
              onClick={() => naviagte("/order")}
              className="bg-white text-gray-600 rounded-full px-4 py-2 md:py-3 font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t("start_order_text")}
            </button>
          </div>

          <div className="border-b border-white/20 my-4"></div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                {t("delivered_as_signed")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                {t("included_unlimited_revisions_text")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                {t("expedited_service_notarisation_text")}
              </p>
            </div>
          </div>
        </div>

        {/* Standard Translation Card */}
        <div className="p-6 rounded-xl bg-[linear-gradient(to_top_right,rgba(77,96,93,1),rgba(79,77,60,1))] flex flex-col gap-4">
          <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
            {t("standart_translation")}
          </h2>
          <p className="text-white font-semibold text-sm md:text-base lg:text-lg">
            {t("standart_translation_description")}
          </p>
          <div>
            <button
              onClick={() => naviagte("/order")}
              className="bg-white text-gray-600 rounded-full px-4 py-2 md:py-3 font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t("start_order_text")}
            </button>
          </div>

          <div className="border-b border-white/20 my-4"></div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                {t("delivered_docx_text")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                {t("included_unlimited_revisions_text")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                {t("expedited_service_available")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
