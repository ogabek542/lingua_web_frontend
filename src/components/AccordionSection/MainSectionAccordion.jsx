import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const faqData = [
  {
    question: "How does the translation process work?",
    answer:
      "Our translation process is simple and efficient, but understanding the steps in advance can be helpful. Here's a quick overview: upload your documents and place your order, we assign the best translator for your project, and you'll be notified when your translation is complete. If revisions are needed, you can request them. For a detailed breakdown, we recommend reviewing our Translation Process Guide before placing an order.",
  },
  {
    question: "How much do translations cost?",
    answer:
      "Certified translations , with a page defined or less.  with a minimum . Additional services, such as proofreading and expedited turnaround, are available for an extra fee. For full details, visit our pricing page or get a quote to calculate your project cost.",
  },
  {
    question: "How long does it take to receive my translation?",
    answer:
      "Most 1-3 page documents (up to 750 words) are delivered digitally within 24 hours. For a precise estimate, request a quote. Our translations are completed by professional human translators, and turnaround times vary based on factors such as word count, language pair, translator availability, and document complexity. Expedited turnaround is available, reducing the standard time by approximately 50%. Learn more about translation turnaround times..",
  },
  {
    question: "Do you offer notarized translations?",
    answer:
      "We offer notarization as an optional add-on for all certified translations at $19.95 per order. Each Certificate of Translation Accuracy in your order will be notarized by a representative of our company and a Kentucky Notary Public, including their signature, commission number, expiration date, and an official rubber ink stamp. This notarization is valid in all 50 states.",
  },
  {
    question: "How do I receive my completed translation?",
    answer:
      "We'll notify you via email when your documents are translated and ready for your review. You can always access your order details, retrieve translated files, and request revisions from your order status page.",
  },
];

const MainSectionAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full h-auto p-4 sm:p-6">
      {/* left side */}
      <div className="w-full p-5 flex flex-col gap-5 h-auto justify-center px-[85px]">
        <h2 className="w-full max-w-3xl text-start text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="w-full max-w-2xl text-start text-sm md:text-base lg:text-lg text-gray-600">
          Get answers to common questions about our translation services. Learn
          how our process works, pricing details, turnaround times, document
          acceptance, notarization options, and how to receive your completed
          translation.
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
              className="flex items-center justify-between px-4 py-3 text-left"
            >
              <p className="font-medium text-base">{item.question}</p>
              {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {openIndex === index && (
              <p className="px-4 pb-4 text-sm text-gray-600 transition-all duration-300 ease-in-out">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSectionAccordion;
