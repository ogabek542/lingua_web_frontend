import React from "react";
import { forwardRef } from "react";
import { FiMap } from "react-icons/fi";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { TbCloudComputing } from "react-icons/tb";
import { TbListSearch } from "react-icons/tb";
import LinkCard from "../LinkCard/LinkCard";
import { useTranslation } from "react-i18next";

export const Menu2 = forwardRef((props, ref) => {
  const { t } = useTranslation();
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
        title={t("help_center")}
        description={t("answers_to_common_quest")}
        Icon={FiMap}
      />
      <LinkCard
        href="#"
        title={t("refer_earn_text")}
        description={t("invite_others_and_rewards")}
        Icon={PiShareNetworkDuotone}
      />
      <LinkCard
        href="#"
        title={t("api_docs_text")}
        description={t("automate_and_management_scale")}
        Icon={TbCloudComputing}
      />
      <LinkCard
        href="#"
        title={t("order_kookup_text")}
        description={t("check_orders_details")}
        Icon={TbListSearch}
      />
    </section>
  );
});
