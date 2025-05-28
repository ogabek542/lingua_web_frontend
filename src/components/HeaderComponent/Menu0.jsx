import React from "react";
import { forwardRef } from "react";
import LinkCard from "../LinkCard/LinkCard";
import { FiMap } from "react-icons/fi";
import { PiSuitcase } from "react-icons/pi";
import { MdOutlineNewLabel } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";

export const Menu0 = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className=" h-auto  w-[1440px]  flex flex-col p-2 px-3">

      <div className=" flex items-center w-full gap-[100px]">
      <div className="flex flex-col  w-2/3 p-2">
      <p className="text-xs text-gray-500 ">Translation service</p>
      </div>
      <div className="flex flex-col  w-1/3 p-2">
      <p className="text-xs text-gray-500 ">For businesses</p>
      </div>
      </div>

      <div className="p-2 flex items-center w-full gap-[100px]">
        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col  w-2/3" >
          <div className="flex  items-center justify-between gap-4 h-[230px]  ">
            {/* left */}
              <a
                  href="#"
                  className="relative flex h-full flex-col justify-between rounded-2xl bg-[rgba(32,32,32,1)] p-4 hover:shadow-lg transition-shadow group w-1/2"
                >
                  <div>
                    <p className="text-lg font-semibold text-white capitalize">
                    Certified Translation
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                    Word-for-word document translation width certification letter for
                    official use.
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center  border-[1px] border-[rgba(119,119,119,1)] rounded-full group-hover:border-white  duration-200">
                    <div className="flex h-12 w-12 items-center justify-center    text-white">
                      <FiArrowRight className="text-lg"/>
                    </div>
                  </div>
                </a>

            {/* right */}
              <a
                href="#"
                className="relative flex h-full flex-col justify-between rounded-2xl bg-[#384541] p-4 hover:shadow-lg transition-shadow group w-1/2"
              >
                <div>
                  <p className="text-lg font-semibold text-white capitalize">
                    Standard Translation
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Interpretive document translation delivered in an editable format for business or personal use.
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center  border-[1px] border-[rgba(119,119,119,1)] rounded-full group-hover:border-white  duration-200">
                  <div className="flex h-12 w-12 items-center justify-center    text-white">
                    <FiArrowRight className="text-lg"/>
                  </div>
                </div>
              </a>
          </div>
        </div>
        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col  w-1/3">
          <div className="flex flex-col items-center">
            <LinkCard
              href="#"
              title="Business Accounts"
              description="Offer professional translation"
              Icon={PiSuitcase}
            />
            <LinkCard
              href="#"
              title="White Label Transalation"
              description="Offer professional translations under your brand"
              Icon={MdOutlineNewLabel}
            />
            <LinkCard
              href="#"
              title="Document Translation API"
              description="Seamlessly add translation to your workflows"
              Icon={TbCloudComputing}
            />
          </div>
        </div>
      </div>
      

    </nav>
  );
});
