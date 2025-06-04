import React from "react";
import logoBigImage from "../../assets/linguaPhoto.png";
import { BiCertification } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import MainTop from "../../components/MainTopSection/MainTop";
import MiddleSection from "../../components/MiddleSectionComponent/MiddleSection";
import TranslateBetweenSection from "../../components/TranslateBetween/TranslateBetweenSection";
import EveryCaseSection from "../../components/EveryCaseSection/EveryCaseSection";

// import icon image //
import FirstImage from "../../assets/bbb.webp";
import SecondImage from "../../assets/uscis.webp";
import ThirdImage from "../../assets/privacy.webp";
import DocumentComponent from "../../components/DocumentComponent/DocumentComponent";

const MainSection = () => {
  return (
    <div className="container flex flex-col items-center  w-full   h-auto    ">
      <MainTop />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full h-auto p-4 sm:p-6">
        {/* First certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <BiCertification className="w-12 h-12 sm:w-13 sm:h-13 text-gray-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              Republic of Uzbekistan
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Ministry of Justice License
            </p>
          </div>
        </div>

        {/* Second certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <img
            src={SecondImage}
            alt="ISO 9001 certification"
            className="w-12 h-12 sm:w-12 sm:h-12 object-contain flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              ISO 9001:2015
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Quality management certified
            </p>
          </div>
        </div>

        {/* Third certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <img
            src={ThirdImage}
            alt="Security certification"
            className="w-12 h-12 sm:w-12 sm:h-12 object-contain flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              Confidential and secure
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Your data is protected.
            </p>
          </div>
        </div>

        {/* Fourth certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <MdAddCall className="w-12 h-12 sm:w-12 sm:h-12 object-contain flex-shrink-0 text-gray-600" />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              24/7 Support
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Ongoing technical support
            </p>
          </div>
        </div>
      </div>
      <MiddleSection />
      <TranslateBetweenSection />
      <DocumentComponent />
      <EveryCaseSection />
    </div>
  );
};

export default MainSection;
