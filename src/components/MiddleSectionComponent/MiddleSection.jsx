import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import WorlImage from "../../assets/image_world.jpg";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

const MiddleSection = () => {
  const naviagte = useNavigate();
  return (
    <div className="container flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-10 px-4">
      <p className="w-full max-w-3xl text-center text-2xl md:text-4xl lg:text-5xl font-medium leading-tight">
        High-quality translations. Fast, reliable results.
      </p>
      <p className="w-full max-w-2xl text-center text-sm md:text-base lg:text-lg text-gray-600">
        We offer two premium translation services designed for a variety of
        industries, use cases, and document types. Our team of native-speaking
        professional translators delivers precise, reliable translations in 15+
        languages.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-7xl px-4">
        {/* Certified Translation Card */}
        <div className="p-6 rounded-xl bg-[linear-gradient(to_top_right,rgba(91,64,27,1),rgba(32,42,50,1))] flex flex-col gap-4">
          <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
            Certified Translation
          </h2>
          <p className="text-white font-semibold text-sm md:text-base lg:text-lg">
            Word-for-word document translation with certification letter for
            official use.
          </p>
          <div>
            <button
              onClick={() => naviagte("/order")}
              className="bg-white text-gray-600 rounded-full px-4 py-2 md:py-3 font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-0.5 cursor-pointer"
            >
              Start Your Order
            </button>
          </div>

          <div className="border-b border-white/20 my-4"></div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                Delivered as a signed, stamped PDF
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                Includes unlimited revisions and formatting
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                Expedited service, notarization, apostille & hard copy available
              </p>
            </div>
          </div>
        </div>

        {/* Standard Translation Card */}
        <div className="p-6 rounded-xl bg-[linear-gradient(to_top_right,rgba(77,96,93,1),rgba(79,77,60,1))] flex flex-col gap-4">
          <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
            Standard Translation
          </h2>
          <p className="text-white font-semibold text-sm md:text-base lg:text-lg">
            Interpretive document translation delivered in an editable format
            for business or personal use.
          </p>
          <div>
            <button
              onClick={() => naviagte("/order")}
              className="bg-white text-gray-600 rounded-full px-4 py-2 md:py-3 font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-0.5 cursor-pointer"
            >
              Start Your Order
            </button>
          </div>

          <div className="border-b border-white/20 my-4"></div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                Delivered in DOCX format
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                Includes unlimited revisions and formatting
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiCheckCircleFill className="text-white text-xl" />
              <p className="text-white text-sm md:text-base">
                Expedited service & desktop publishing available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
