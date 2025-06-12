import React from "react";
import IconContent from "../IconContent/IconContent";
import AllDocumentsScreensData from "../IndustryComponentData/AllDocumentsData";
import { useTranslation } from "react-i18next";

const ByDocument = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col  px-3 h-auto  w-full">
      {/* top contetn */}
      <span className="text-md text-gray-500 my-2">
        {t("document_simple_text")}
      </span>
      {/* main content */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 grid-rows-6 gap-1 h-auto">
        {AllDocumentsScreensData.map((item, idx) => (
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
      {/* divider */}
      <div className="w-full border-[1px] border-gray-200 my-2"></div>
      {/* bottom content */}
      <span className="text-md text-gray-500 my-2">
        {t("see_all_document")}
      </span>
    </div>
  );
};

export default ByDocument;
