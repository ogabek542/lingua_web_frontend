import React, { forwardRef } from "react";
import LinkCard from "../LinkCard/LinkCard";
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbStars, TbAffiliate } from "react-icons/tb";
import { PiSuitcase } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Menu3 = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const naviagte = useNavigate();
  return (
    <section
      ref={ref}
      className="
        w-full              
        lg:w-[400px]         
        max-w-full           
        flex flex-col        
        bg-white            
        h-auto               
        overflow-y-auto      
      "
    >
      <LinkCard
        href="#"
        title={t("about_text")}
        description={t("learn_more_website")}
        Icon={FaRegComment}
      />
      <LinkCard
        href="#"
        title={t("contact_us_text")}
        description={t("reach_support_help")}
        Icon={MdOutlineEmail}
      />
      <LinkCard
        href="#"
        title={t("transaltion_job")}
        description={t("apply_join_team")}
        Icon={PiSuitcase}
      />
      <LinkCard
        href="#"
        title={t("partnerships_text")}
        description={t("provide_member_discount")}
        Icon={LuHeartHandshake}
      />
      <LinkCard
        href="#"
        title={t("guaratnee_text")}
        description={t("guarantee_acceptance")}
        Icon={AiOutlineSafetyCertificate}
      />
    </section>
  );
});
