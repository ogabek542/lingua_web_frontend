import React from "react";
import { useTranslation } from "react-i18next";

const EveryCaseSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-10 px-4">
      <p className="w-full max-w-3xl text-center text-2xl md:text-4xl lg:text-5xl font-medium leading-tight px-14">
        {t("translation_service_every_case")}
      </p>
      <p className="w-full max-w-2xl text-center text-sm md:text-base lg:text-lg text-gray-600">
        {t("we_provide_accurate_document_text")}
      </p>
    </div>
  );
};

export default EveryCaseSection;
