import React from "react";

const SomeIconContent = ({
  iconbgColor,
  iconColor,
  Icon,
  contentText,
  linkAddress,
}) => (
  <a
    href={linkAddress}
    className="rounded-lg flex items-center gap-2 bg-white hover:bg-gray-100 p-2 transition-[background-color,margin] duration-200 ease-linear h-auto w-auto hover:mb-2"
  >
    <div
      className="w-[30px] h-[30px] rounded-md flex items-center justify-center"
      style={{ backgroundColor: iconbgColor }}
    >
      {Icon && <Icon className="text-lg" style={{ color: iconColor }} />}
    </div>
    <p className="text-md font-[400] capitalize">{contentText}</p>
  </a>
);

export default SomeIconContent;
