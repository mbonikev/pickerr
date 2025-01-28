import React from "react";
import { LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";

function TopBar() {
  const buttonStyle = `text-xl h-[32px] aspect-square flex items-center justify-center cursor-pointer hover:bg-textColorWeak/20 rounded-xl`
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
      <div className="flex-1 flex items-center justify-end px-4 gap-1">
        <button className="text-xl h-[32px] aspect-square flex items-center justify-center cursor-pointer hover:bg-textColorWeak/20 rounded-xl">
          <LuSettings />
        </button>
        <button className="text-xl h-[32px] aspect-square flex items-center justify-center cursor-pointer hover:bg-textColorWeak/20 rounded-xl">
          <LuSettings />
        </button>
        <button className="text-xl h-[32px] aspect-square flex items-center justify-center cursor-pointer hover:bg-textColorWeak/20 rounded-xl">
          <LuSettings />
        </button>
        <Link
          to="/how-it-works"
          className="text-base px-3 bg-mainColor text-white py-1 rounded-lg ml-2"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
