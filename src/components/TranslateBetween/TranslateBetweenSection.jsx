import React from "react";
import EnglishImage from "../../assets/svg/british.svg";
import imageWorld from "../../assets/image_world.jpg";
import RussianImage from "../../assets/svg/russian.svg";
import GermanImage from "../../assets/svg/german.svg";
import ItalianImage from "../../assets/svg/italian.svg";
import FrenchImage from "../../assets/svg/france.svg";
import ChinaImage from "../../assets/svg/china.svg";
import SpanishImage from "../../assets/svg/spain.svg";
import JapanImage from "../../assets/svg/japan.svg";

const TranslateBetweenSection = () => {
  const languages = [
    { name: "English", flag: EnglishImage },
    { name: "Spanish", flag: SpanishImage },
    { name: "French", flag: FrenchImage },
    { name: "German", flag: GermanImage },
    { name: "Italian", flag: ItalianImage },
    { name: "Japan", flag: JapanImage },
    { name: "Russian", flag: RussianImage },
    { name: "Chinese", flag: ChinaImage },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full h-auto p-4 sm:p-6">
      {/* left side */}
      <div className="w-full  p-5 flex flex-col gap-5 h-auto">
        <h2 className="w-full max-w-3xl text-start text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Translate between 15+ languages
        </h2>
        <p className="w-full max-w-2xl text-start text-sm md:text-base lg:text-lg text-gray-600">
          Our team of full-time professional translators is carefully vetted and
          regularly reviewed to maintain exceptional accuracy and consistency
          across all languages. We ensure every translation meets the highest
          standards for quality and reliability.
        </p>
      </div>

      <div
        className="w-full  p-3 h-auto pt-[150px] bg-cover bg-center bg-no-repeat rounded-2xl"
        style={{ backgroundImage: `url(${imageWorld})` }}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,auto))] sm:grid-cols-[repeat(auto-fit,minmax(140px,auto))] md:grid-cols-[repeat(auto-fit,minmax(160px,auto))] lg:grid-cols-[repeat(auto-fit,minmax(180px,auto))] gap-2 justify-items-start">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 p-2 w-auto h-auto border-[1px] border-gray-400 rounded-lg hover:border-gray-600 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <img
                src={language.flag}
                alt={`${language.name} flag`}
                className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
              />
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium  whitespace-nowrap">
                {language.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslateBetweenSection;
