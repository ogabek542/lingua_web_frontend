import React from "react";
import { forwardRef } from "react";
import { FiMap } from "react-icons/fi";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { TbCloudComputing } from "react-icons/tb";
import { TbListSearch } from "react-icons/tb";





export const Menu2 = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="h-auto  w-[380px] flex items-center flex-col gap-2 p-1 "
    >
      {/* HELP LINK */}
      <a href="#" className="flex items-center w-full gap-3 p-3 rounded-2xl hover:bg-[rgba(247,247,242,1)] transition-colors duration-200 group">
        {/* Icon Box */}
        <div className="flex items-center justify-center w-[55px] h-[55px] rounded-2xl border border-[rgba(225,223,217,1)] bg-transparent group-hover:bg-white transition-colors duration-200">
          <FiMap className="text-xl text-[rgba(118,118,117,1)]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <p className="text-black text-[15px] font-medium capitalize">
            Help Center
          </p>
          <p className="text-gray-500 text-sm leading-tight">
            Answers to common questions and issues
          </p>
        </div>
      </a>

      {/* REFER & EARN LINK */}
      <a href="#" className="flex items-center w-full gap-3 p-3 rounded-2xl hover:bg-[rgba(247,247,242,1)] transition-colors duration-200 group">
        {/* Icon Box */}
        <div className="flex items-center justify-center w-[55px] h-[55px] rounded-2xl border border-[rgba(225,223,217,1)] bg-transparent group-hover:bg-white transition-colors duration-200">
          <PiShareNetworkDuotone className="text-2xl text-[rgba(118,118,117,1)]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <p className="text-black text-[15px] font-medium capitalize">
            refer & earn
          </p>
          <p className="text-gray-500 text-sm leading-tight">
            Invite others and earn rewards
          </p>
        </div>
      </a>

      {/* API DOCS LINK */}
      <a href="#" className="flex items-center w-full gap-3 p-3 rounded-2xl hover:bg-[rgba(247,247,242,1)] transition-colors duration-200 group">
        {/* Icon Box */}
        <div className="flex items-center justify-center w-[55px] h-[55px] rounded-2xl border border-[rgba(225,223,217,1)] bg-transparent group-hover:bg-white transition-colors duration-200">
          <TbCloudComputing  className="text-2xl text-[rgba(118,118,117,1)]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <p className="text-black text-[15px] font-medium capitalize">
            API docs
          </p>
          <p className="text-gray-500 text-sm leading-tight">
            Automate and manage translations at scale
          </p>
        </div>
      </a>

      {/* ORDER & LOOKUP LINK */}
      <a href="#" className="flex items-center w-full gap-3 p-3 rounded-2xl hover:bg-[rgba(247,247,242,1)] transition-colors duration-200 group">
        {/* Icon Box */}
        <div className="flex items-center justify-center w-[55px] h-[55px] rounded-2xl border border-[rgba(225,223,217,1)] bg-transparent group-hover:bg-white transition-colors duration-200">
          <TbListSearch   className="text-2xl text-[rgba(118,118,117,1)]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <p className="text-black text-[15px] font-medium capitalize">
            Order Lookup
          </p>
          <p className="text-gray-500 text-sm leading-tight">
            Check your order status and details
          </p>
        </div>
      </a>

    </section>
  );
});
