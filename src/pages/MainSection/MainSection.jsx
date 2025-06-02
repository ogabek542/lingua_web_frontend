import React from "react";
import logoBigImage from "../../assets/linguaPhoto.png";
import { BiCertification } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import MainTop from "../../components/MainTopSection/MainTop";
// import icon image //
import FirstImage from "../../assets/bbb.webp";
import SecondImage from "../../assets/uscis.webp";
import ThirdImage from "../../assets/privacy.webp";

const MainSection = () => {
  return (
    <div className="container flex flex-col items-center  w-full   h-auto    ">
      <MainTop />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full h-auto p-4 sm:p-6">
        {/* First certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <BiCertification className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              Oʻzbekiston Respublikasi
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Adliya Vazirligi litsenziyasi
            </p>
          </div>
        </div>

        {/* Second certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <img
            src={SecondImage}
            alt="ISO 9001 certification"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              ISO 9001:2015
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Sifat menejmenti sertifikatlangan
            </p>
          </div>
        </div>

        {/* Third certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <img
            src={ThirdImage}
            alt="Security certification"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              Maxfiy va xavfsiz
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Maʼlumotlaringiz himoyalangan
            </p>
          </div>
        </div>

        {/* Fourth certification */}
        <div className="flex flex-row items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <MdAddCall className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0 text-gray-600" />
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-gray-800 leading-tight">
              24/7 Yordam
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Doimiy texnik qo'llab-quvvatlash
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MainSection;
