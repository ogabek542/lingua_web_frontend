import React from 'react';

const IconContent = ({ iconbgColor, iconColor, Icon, contentText,linkAddress }) => (
  <a   href={linkAddress}  className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors">
    <div
      className="w-[30px] h-[30px] rounded-md flex items-center justify-center"
      style={{ backgroundColor: iconbgColor }}
    >
      {Icon && <Icon className="text-lg" style={{ color: iconColor }} />}
    </div>
    <p className="text-md font-[400] capitalize">{contentText}</p>
  </a>
);

export default IconContent;
