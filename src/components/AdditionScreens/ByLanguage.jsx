// ByLanguage.jsx
import React from "react";
import LanguageCard from "../LanguageCard/LanguageCard";

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

const languages = [
  { name: "Azerbaijan", icon: Azeri },
  { name: "Kazakistan", icon: Kazak },
  { name: "Kyrgizistan", icon: Kyrgiz },
  { name: "Tadjikistan", icon: Tajik },
  { name: "Russia", icon: Russian },
  { name: "Ukrain", icon: Ukrain },
  { name: "Belarus", icon: Belarus },
  { name: "English", icon: British },
  { name: "Turkish", icon: Turkish },
  { name: "German", icon: German },
  { name: "Korean", icon: Korean },
  { name: "Japan", icon: Japan },
  { name: "Poland", icon: Poland },
  { name: "Arabic", icon: Arabic },
  { name: "Uzbek", icon: Uzbek },
  { name: "France", icon: France },
  { name: "Spanish", icon: Spain },
  { name: "China", icon: China },
  { name: "Italian", icon: Italian },
  { name: "Persian", icon: Persian },
  { name: "Indian", icon: Indian },
];

const ByLanguage = () => {
  return (
    <div className="flex flex-col px-3 w-full h-full">
      {/* Header */}
      <span className="text-md text-gray-500 my-2">Language</span>

      {/* Grid of Language Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {languages.map(({ name, icon }) => (
          <LanguageCard key={name} name={name} icon={icon} />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 my-4"></div>

      {/* Footer */}
      <span className="text-md text-gray-500 mb-2">See all languages</span>
    </div>
  );
};

export default ByLanguage;
