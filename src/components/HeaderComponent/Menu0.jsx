import React, { forwardRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import LinkCard from "../LinkCard/LinkCard";
import { PiSuitcase } from "react-icons/pi";
import { MdOutlineNewLabel } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export const Menu0 = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <nav
      ref={ref}
      className="w-full lg:w-[1440px] mx-auto flex flex-col p-2 px-3"
    >
      <div className="flex flex-col lg:flex-row lg:items-start w-full gap-4 lg:gap-24">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <p className="text-xs text-gray-500">Translation service</p>

          <div className="flex flex-col lg:flex-row gap-4 h-[380px] lg:h-[230px] w-full">
            {/* Certified Translation */}
            <a
              href="#"
              className="flex-1 relative flex flex-col justify-between rounded-2xl bg-[#202020] p-4 hover:shadow-lg transition group"
            >
              <div>
                <p className="text-lg font-semibold text-white capitalize">
                  {t("certified_translation")}
                </p>
                <p className="mt-1 text-sm text-gray-400 leading-snug">
                  {t("certifield_translation_description")}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center justify-center border border-gray-400 rounded-full group-hover:border-white transition-colors">
                <div className="w-12 h-12 flex items-center justify-center text-white">
                  <FiArrowRight className="text-lg" />
                </div>
              </div>
            </a>

            {/* Standard Translation */}
            <a
              href="#"
              className="flex-1 relative flex flex-col justify-between rounded-2xl bg-[#384541] p-4 hover:shadow-lg transition group"
            >
              <div>
                <p className="text-lg font-semibold text-white capitalize">
                  {t("standart_translation")}
                </p>
                <p className="mt-1 text-sm text-gray-400 leading-snug">
                  {t("standart_translation_description")}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center justify-center border border-gray-400 rounded-full group-hover:border-white transition-colors">
                <div className="w-12 h-12 flex items-center justify-center text-white">
                  <FiArrowRight className="text-lg" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <p className="text-xs text-gray-500">{t("for_business")}</p>
          <div className="flex flex-col gap-3">
            <LinkCard
              href="#"
              title={t("business_accounts")}
              description={t("offer_best_translation_description")}
              Icon={PiSuitcase}
            />
            <LinkCard
              href="#"
              title={t("white_label_text_title")}
              description={t("offer_professional_translation")}
              Icon={MdOutlineNewLabel}
            />
            <LinkCard
              href="#"
              title={t("document_translation_text")}
              description={t("sameless_translation_text")}
              Icon={TbCloudComputing}
            />
          </div>
        </div>
      </div>
    </nav>
  );
});
