import React from "react";
import clsx from "clsx";

const LinkCard = ({ href, title, description, Icon, iconClassName }) => {
  return (
    <a
      href={href}
      className="flex items-center w-full gap-3 p-3 rounded-2xl hover:bg-[rgba(247,247,242,1)] transition-colors duration-200 group"
    >
      <div className="flex items-center justify-center w-[55px] h-[55px] rounded-2xl border border-[rgba(225,223,217,1)] bg-transparent group-hover:bg-white transition-colors duration-200">
        <Icon className={clsx("text-2xl text-[rgba(118,118,117,1)]", iconClassName)} />
      </div>

      <div className="flex flex-col">
        <p className="text-black text-[15px] font-medium capitalize">
          {title}
        </p>
        <p className="text-gray-500 text-sm leading-tight">
          {description}
        </p>
      </div>
    </a>
  );
};

export default LinkCard;
