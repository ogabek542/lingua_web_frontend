import React from "react";
import { TbFileCertificate } from "react-icons/tb";
import { BiSolidLockOpen } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-screen bg-[rgba(18,18,18,1)] rounded-tl-[70px] rounded-tr-[70px] h-[1500px] gap-6">
      {/* header text of footer */}
      <p className="text-white text-5xl w-[450px] text-center font-semibold">
        Get your translation started today
      </p>

      {/* order buttons section  */}
      <div className="flex items-center justify-between gap-2">
        <button className="p-3 px-6  border-[1px] w-[180px] rounded-4xl bg-[rgba(8,52,115,1)] cursor-pointer hover:bg-[#083f73]">
          <p className="text-white">Start Your Order</p>
        </button>

        <button className="p-3 px-6 border-[1px] border-gray-400 w-[180px] rounded-4xl cursor-pointer bg-[rgba(18,18,18,1)] hover:bg-[rgba(18,18,29,0.1)] hover:border-white">
          <p className="text-white">Get a Quote</p>
        </button>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 container gap-5">

        <div className="p-4 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-5 ">
          {/* top div */}
          <div className="flex items-center gap-3">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center">
              <TbFileCertificate className="text-md text-white"/>
            </div>
            <p className="text-white font-semibold capitalize text-lg">Professional Quality</p>
          </div>
          {/* bottomdiv */}
          <div className="flex items-center gap-5">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md flex items-center justify-center">
            </div>
            <p className="text-white font-medium text-sm leading-6">Expert translators ensuring accuracy, consistency, and reliability</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-5 ">
          {/* top div */}
          <div className="flex items-center gap-3">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center">
              <RiMailSendFill className="text-md text-white"/>
            </div>
            <p className="text-white font-semibold capitalize text-lg">Speedy Turnarounds</p>
          </div>
          {/* bottomdiv */}
          <div className="flex items-center gap-5">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md flex items-center justify-center">
            </div>
            <p className="text-white font-medium text-sm leading-6">Fast and efficient service, with same-day options for urgent orders</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-5 ">
          {/* top div */}
          <div className="flex items-center gap-3">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center">
              <RiMoneyDollarCircleLine className="text-md text-white"/>
            </div>
            <p className="text-white font-semibold capitalize text-lg">Simple Pricing</p>
          </div>
          {/* bottomdiv */}
          <div className="flex items-center gap-5">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md flex items-center justify-center">
            </div>
            <p className="text-white font-medium text-sm leading-6">Affordable translations with clear, upfront pricing and no hidden fees</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[rgba(31,31,30,1)] flex flex-col gap-5 ">
          {/* top div */}
          <div className="flex items-center gap-3">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md bg-[rgba(43,43,43,1)] flex items-center justify-center">
              <BiSolidLockOpen className="text-md text-white"/>
            </div>
            <p className="text-white font-semibold capitalize text-lg">Secure & Confidential</p>
          </div>
          {/* bottomdiv */}
          <div className="flex items-center gap-5">
            {/* icon div */}
            <div className="w-[25px] h-[25px] rounded-md flex items-center justify-center">
            </div>
            <p className="text-white font-medium text-sm leading-6">Your information stays private and protected with strict safeguards</p>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
