import React from "react";
import AzeriLanguage from "../../assets/svg/azeri.svg";
import KazakLanguage from "../../assets/svg/kazak.svg";
import KyrgizLanguage from "../../assets/svg/kygiz.svg";
import TajikLanguage from "../../assets/svg/tajik.svg";
import RussianLanguage from "../../assets/svg/russian.svg";
import UkrainLanguage from "../../assets/svg/ukrain.svg";
import BelarusLanguage from "../../assets/svg/belarus.svg";
import BritishLanguage from "../../assets/svg/british.svg";
import TurkishLanguage from "../../assets/svg/turkiye.svg";
import GermanLanguage from "../../assets/svg/german.svg";
import KoreanLanguage from "../../assets/svg/korea.svg";
import JapanLanguage from "../../assets/svg/japan.svg";
import PolandLanguage from "../../assets/svg/poland.svg";
import ArabicLanguage from "../../assets/svg/arabic.svg";
import UzbekLanguage from "../../assets/svg/uzbek.svg";
import FrancLanguage from "../../assets/svg/france.svg";
import SpanishLanguage from "../../assets/svg/spain.svg";
import ChinaLanguage from "../../assets/svg/china.svg";
import ItalianLanguage from "../../assets/svg/italian.svg";
import PersianLanguage from "../../assets/svg/persian.svg";
import IndianLanguage from "../../assets/svg/indian.svg";





const ByLanguage = () => {
  return (
    <div className="flex flex-col  px-3 h-auto  w-full">
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
            <img src={TajikLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Tadjikistan</p>
        </a>
        {/* russian */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={RussianLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Russia</p>
        </a>
        {/* ukrain */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={UkrainLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Ukrain</p>
        </a>
        {/* belarus */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={BelarusLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Belarus</p>
        </a>
        {/* english */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={BritishLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">English</p>
        </a>
        {/* turkish */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={TurkishLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Turkish</p>
        </a>
        {/* german */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={GermanLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">German</p>
        </a>
        {/* Korean */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={KoreanLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Korean</p>
        </a>
        {/* japan */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={JapanLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Japan</p>
        </a>
        {/* poland */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={PolandLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Poland</p>
        </a>
        {/* arabic */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={ArabicLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Arabic</p>
        </a>
        {/* uzbek */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={UzbekLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Uzbek</p>
        </a>
        {/* france */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={FrancLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">France</p>
        </a>
        {/* spanish */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={SpanishLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Spanish</p>
        </a>
        {/* china */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={ChinaLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">China</p>
        </a>
        {/* italian */}
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={ItalianLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Italian</p>
        </a>
        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={PersianLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Persian</p>
        </a>
        {/* indian */}

        <a
          href="#"
          className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
        >
          <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
            <img src={IndianLanguage} alt="azeri_language" />
          </div>
          <p className="text-md font-[400] capitalize">Indian</p>
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
