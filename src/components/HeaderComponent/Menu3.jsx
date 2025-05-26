import React from 'react'
import { forwardRef } from 'react'
import LinkCard from '../LinkCard/LinkCard';
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { PiSuitcase } from "react-icons/pi";
import { TbAffiliate } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";


export const Menu3 = forwardRef((props, ref) => {
    return (
      <section 
      ref={ref} 
      className="h-auto  w-[400px] flex items-center flex-col  p-1 "
      >

      <LinkCard
        href="#"
        title="About"
        description="Learn more about World Translate Service"
        Icon={FaRegComment }
      />

      <LinkCard
        href="#"
        title="Contact Us"
        description="Reach out to our support team for help"
        Icon={MdOutlineEmail}
      />

      <LinkCard
        href="#"
        title="Customer Reviews"
        description="See what our customers are saying"
        Icon={TbStars }
      />

      <LinkCard
        href="#"
        title="Translation Jobs"
        description="Apply to join our translation team"
        Icon={PiSuitcase  }
      />

      <LinkCard
        href="#"
        title="Affiliates"
        description="Earn commissions by referring customers"
        Icon={TbAffiliate   }
      />

      <LinkCard
        href="#"
        title="Partnerships"
        description="Provide member discounts on translates"
        Icon={LuHeartHandshake    }
      />

      <LinkCard
        href="#"
        title="Guarantee"
        description="Guaranteed acceptanse or your money back"
        Icon={AiOutlineSafetyCertificate    }
      />

      </section>
    );
  });
