import React, { forwardRef } from "react";
import LinkCard from "../LinkCard/LinkCard";
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbStars, TbAffiliate } from "react-icons/tb";
import { PiSuitcase } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

export const Menu3 = forwardRef((props, ref) => {
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
        title="About"
        description="Learn more about World Translate Service"
        Icon={FaRegComment}
      />
      <LinkCard
        href="#"
        title="Contact Us"
        description="Reach out to our support team for help"
        Icon={MdOutlineEmail}
      />
      <LinkCard
        href="#"
        title="Translation Jobs"
        description="Apply to join our translation team"
        Icon={PiSuitcase}
      />
      <LinkCard
        href="#"
        title="Partnerships"
        description="Provide member discounts on translations"
        Icon={LuHeartHandshake}
      />
      <LinkCard
        href="#"
        title="Guarantee"
        description="Guaranteed acceptance or your money back"
        Icon={AiOutlineSafetyCertificate}
      />
    </section>
  );
});
