import React from "react";
import UStranslate from "../../assets/sliderImages/uscis-translations.webp";
import VisaApplicationImage from "../../assets/sliderImages/visa-applications.webp";
import DriverLicenseImage from "../../assets/sliderImages/drivers-license-conversion.webp";
import MarriageAbroadImage from "../../assets/sliderImages/marriages-abroad.webp";
import AcademicResearchImage from "../../assets/sliderImages/academic-research.webp";
import UniversityImage from "../../assets/sliderImages/university-college-admissions.webp";
import EcfmgImage from "../../assets/sliderImages/ecfmg-translations.webp";
import RealEstateImage from "../../assets/sliderImages/real-estate-transactions.webp";
import EducationIMage from "../../assets/sliderImages/educational-credential-evaluations.webp";
import DeportationImage from "../../assets/sliderImages/deportation-defense.webp";
import CitizenshipImage from "../../assets/sliderImages/citizenship-applications.webp";
import EmploymentImage from "../../assets/sliderImages/employment-abroad.webp";

const sliderItems = [
  { img: UStranslate, text: "USCIS Translations" },
  { img: VisaApplicationImage, text: "Visa Applications" },
  { img: DriverLicenseImage, text: "Driver’s License" },
  { img: MarriageAbroadImage, text: "Marriage Abroad" },
  { img: AcademicResearchImage, text: "Academic Research" },
  { img: UniversityImage, text: "University & College Admission" },
  { img: EcfmgImage, text: "ECFMG Translations" },
  { img: RealEstateImage, text: "Real Estate Transactions" },
  {
    img: EducationIMage,
    text: "Educational Credential Evaluation",
  },
  {
    img: DeportationImage,
    text: "Deportation Defense",
  },
  { img: CitizenshipImage, text: "Citizenship Application" },
  { img: EmploymentImage, text: "Employment Abroad" },
];

const SliderMain = () => {
  return (
    <div className="w-full overflow-x-auto scroll-smooth">
      <div className="flex gap-4 px-4 py-2 snap-x snap-mandatory">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 rounded-xl w-[243px] h-[150px] relative cursor-pointer overflow-hidden group"
          >
            <img
              src={item.img}
              alt="document_type"
              className="w-full h-auto object-container rounded-xl transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="absolute bottom-0 text-white font-semibold items-start p-2 backdrop-blur-md bg-black/20 border border-white/10 w-full rounded-b-xl overflow-hidden truncate whitespace-nowrap">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderMain;
