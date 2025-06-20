import React from "react";
import IconContent from "../IconContent/IconContent";
import CaseScreensData from "../IndustryComponentData/CaseIndustryData";
import { useTranslation } from "react-i18next";

const ByCase = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col px-4 py-2">
      {/* Header */}
      <span className="text-md text-gray-500 mb-4">{t("use_cases_text")}</span>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CaseScreensData.map((item, idx) => (
          <IconContent
            key={idx}
            iconbgColor={item.iconbgColor}
            iconColor={item.iconColor}
            Icon={item.IconName}
            contentText={t(item.contentText)}
            linkAddress={item.linkAddress}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 my-4" />

      {/* Footer */}
      <span className="text-md text-gray-500 mt-4">{t("see_all_cases")}</span>
    </div>
  );
};

export default ByCase;
