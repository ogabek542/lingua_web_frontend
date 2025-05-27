import React from "react";
import AzeriLanguage from "../../assets/svg/azeri.svg";
import KazakLanguage from "../../assets/svg/kazak.svg";
import KyrgizLanguage from "../../assets/svg/kygiz.svg";
import TajikLanguage from "../../assets/svg/tajik.svg";

const ByLanguage = () => {
  return (
    <div className="flex flex-col  px-3 h-full  w-full">
      {/* top contetn */}
      <span className="text-md text-gray-500 my-2">Language</span>
      {/* main content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-6 gap-1 h-auto">
        {/* azeri */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={AzeriLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Azeribaijan</p>
        </a>
        {/* kazak */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={KazakLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Kazakistan</p>
        </a>
        {/* kyrgiz */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={KyrgizLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Kyrgizistan</p>
        </a>
        {/* tajik */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={KyrgizLaTajikLanguagenguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Tadjikistan</p>
        </a>

      </div>
      {/* divider */}
      <div className="w-full border-[1px] border-gray-200 my-2"></div>
      {/* bottom content */}
      <span className="text-md text-gray-500 my-2">See all language</span>
    </div>
  );
};

export default ByLanguage;
