// LanguageCard.jsx
import React from "react";

const LanguageCard = ({ href = "#", icon, name }) => {
  return (
    <a
      href={href}
      className="rounded-xl flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors"
    >
      <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center">
        <img src={icon} alt={`${name}_language`} className="w-full h-full object-contain" />
      </div>
      <p className="text-md font-normal capitalize text-gray-800">{name}</p>
    </a>
  );
};

export default LanguageCard;
