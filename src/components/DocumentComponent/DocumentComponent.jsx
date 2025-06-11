import React from "react";
import IconContent from "../IconContent/IconContent";
import SomeIconContent from "../IconContent/SomeIconContent";
import SomeDocumentsData from "./SomeDocumetsInfo";
import { useTranslation } from "react-i18next";

const DocumentComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full h-auto p-4 sm:p-6 items-center">
      {/* left side */}
      <div className=" px-[80px] py-[80px]  w-full h-auto bg-cover bg-center bg-no-repeat rounded-2xl  bg-[linear-gradient(to_top,rgba(223,230,241,1),rgba(173,194,223,1))]">
        <div className="w-full min-h-[340px] grid grid-cols-1 grid-rows-10 md:grid-cols-2 md:grid-rows-5  h-auto items-center justify-center gap-4 ">
          {SomeDocumentsData.map((item, idx) => (
            <SomeIconContent
              key={idx}
              iconbgColor={item.iconbgColor}
              iconColor={item.iconColor}
              Icon={item.IconName}
              contentText={t(item.contentText)}
              linkAddress={item.linkAddress}
            />
          ))}
        </div>
      </div>
      {/* right side */}
      <div className="w-full  p-5 flex flex-col gap-5 h-auto">
        <h2 className="w-full max-w-3xl text-start text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
          {t("translate_any_document_text")}
        </h2>
        <p className="w-full max-w-2xl text-start text-sm md:text-base lg:text-lg text-gray-600">
          {t("our_translators_extensive")}
        </p>
      </div>
    </div>
  );
};

export default DocumentComponent;
