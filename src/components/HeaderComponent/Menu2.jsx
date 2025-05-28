import React from "react";
import { forwardRef } from "react";
import { FiMap } from "react-icons/fi";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { TbCloudComputing } from "react-icons/tb";
import { TbListSearch } from "react-icons/tb";
import LinkCard from "../LinkCard/LinkCard";

export const Menu2 = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="
      w-full               
      lg:w-[380px]          
      max-w-full           
      p-1                   
      flex flex-col        
      bg-white             
      h-auto               
      overflow-y-auto  
    "
    >
      <LinkCard
        href="#"
        title="Help Center"
        description="Answers to common questions and issues"
        Icon={FiMap}
      />
      <LinkCard
        href="#"
        title="Refer & Earn"
        description="Invite others and earn rewards"
        Icon={PiShareNetworkDuotone}
      />
      <LinkCard
        href="#"
        title="API Docs"
        description="Automate and manage translations at scale"
        Icon={TbCloudComputing}
      />
      <LinkCard
        href="#"
        title="Order Lookup"
        description="Check your order status and details"
        Icon={TbListSearch}
      />
    </section>
  );
});
