import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const faqData = [
  {
    question: "firts_question_of_accordion",
    answer: "first_answer_of_accordion",
  },
  {
    question: "second_question_of_accordion",
    answer: "second_answer_of_accordion",
  },
  {
    question: "third_question_of_accordion",
    answer: "third_answer_of_accordion",
  },
  {
    question: "fourth_question_of_accordion",
    answer: "fourth_answer_of_accordion",
  },
  {
    question: "fifth_question_of_accordion",
    answer: "fifth_answer_of_accordion",
  },
];

const MainSectionAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full h-auto p-4 sm:p-6">
      {/* left side */}
      <div className="w-full p-5 flex flex-col gap-5 h-auto justify-center px-[85px]">
        <h2 className="w-full max-w-3xl text-start text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
          {t("frequent_answers")}
        </h2>
        <p className="w-full max-w-2xl text-start text-sm md:text-base lg:text-lg text-gray-600">
          {t("get_common_answers")}
        </p>
      </div>

      {/* accordion right side */}
      <div className="w-full p-3 h-auto flex flex-col gap-4 ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full  rounded-lg cursor-pointer"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between px-4 py-3 text-left cursor-pointer"
            >
              <p className="font-medium text-base">{t(item.question)}</p>
              {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {openIndex === index && (
              <p className="px-4 pb-4 text-sm text-gray-600 transition-all duration-300 ease-in-out">
                {t(item.answer)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSectionAccordion;
