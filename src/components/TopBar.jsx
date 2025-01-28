import React from "react";
import { LuInfo, LuPalette, LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";

function TopBar() {
  const buttonStyle = `text-2xl h-[35px] aspect-square flex items-center justify-center cursor-pointer bg-white hover:bg-textColorWeak/20 rounded-xl outline-none`
  return (
    <div className="w-full h-[36px] flex items-center justify-start gap-1.5">
      {/* Logo */}
      <div className="w-fit h-full">
        <img
          src="./logo_black.png"
          alt="logo"
          loading="lazy"
          className="h-[25px] w-fit"
        />
      </div>
      <div className="h-[20px] flex items-center justify-center bg-white px-2 rounded-xl text-sm font-medium text-textColorWeak">
        V1.0
      </div>
      {/* Links */}
      <div className="flex-1 flex items-center justify-end gap-1">
        <button className={`${buttonStyle}`}>
          <LuPalette />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
