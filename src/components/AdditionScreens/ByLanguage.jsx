// ByLanguage.jsx
import React from "react";
import LanguageCard from "../LanguageCard/LanguageCard";
import { useTransition } from "react";

import Azeri from "../../assets/svg/azeri.svg";
import Kazak from "../../assets/svg/kazak.svg";
import Kyrgiz from "../../assets/svg/kygiz.svg";
import Tajik from "../../assets/svg/tajik.svg";
import Russian from "../../assets/svg/russian.svg";
import Ukrain from "../../assets/svg/ukrain.svg";
import Belarus from "../../assets/svg/belarus.svg";
import British from "../../assets/svg/british.svg";
import Turkish from "../../assets/svg/turkiye.svg";
import German from "../../assets/svg/german.svg";
import Korean from "../../assets/svg/korea.svg";
import Japan from "../../assets/svg/japan.svg";
import Poland from "../../assets/svg/poland.svg";
import Arabic from "../../assets/svg/arabic.svg";
import Uzbek from "../../assets/svg/uzbek.svg";
import France from "../../assets/svg/france.svg";
import Spain from "../../assets/svg/spain.svg";
import China from "../../assets/svg/china.svg";
import Italian from "../../assets/svg/italian.svg";
import Persian from "../../assets/svg/persian.svg";
import Indian from "../../assets/svg/indian.svg";
import { useTranslation } from "react-i18next";

const ByLanguage = () => {
  const { t } = useTranslation();
  const languages = [
    { name: t("azerbaijan_text"), icon: Azeri },
    { name: t("kazakh_text"), icon: Kazak },
    { name: t("krygiz_text"), icon: Kyrgiz },
    { name: t("tajik_text"), icon: Tajik },
    { name: t("russian_text"), icon: Russian },
    { name: t("ukrain_text"), icon: Ukrain },
    { name: t("belarus_text"), icon: Belarus },
    { name: t("english_text"), icon: British },
    { name: t("turkish_text"), icon: Turkish },
    { name: t("german_text"), icon: German },
    { name: t("korean_text"), icon: Korean },
    { name: t("japanese_text"), icon: Japan },
    { name: t("poland_text"), icon: Poland },
    { name: t("arabic_text"), icon: Arabic },
    { name: t("uzbek_text"), icon: Uzbek },
    { name: t("french_text"), icon: France },
    { name: t("spanish_text"), icon: Spain },
    { name: t("chinese_text"), icon: China },
    { name: t("italian_text"), icon: Italian },
    { name: t("persian_text"), icon: Persian },
    { name: t("indian_text"), icon: Indian },
  ];
  return (
    <div className="flex flex-col px-3 w-full h-full">
      {/* Header */}
      <span className="text-md text-gray-500 my-2">
        {t("language_header_text")}
      </span>

      {/* Grid of Language Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {languages.map(({ name, icon }) => (
          <LanguageCard key={name} name={name} icon={icon} />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 my-4"></div>

      {/* Footer */}
      <span className="text-md text-gray-500 mb-2">
        {t("see_all_languages_text")}
      </span>
    </div>
  );
};

export default ByLanguage;
