import React from "react";
import TopBar from "../components/TopBar";
import { LuFileSpreadsheet, LuListMinus } from "react-icons/lu";

function Home() {
  const tabStyle = `w-full py-3 px-2 text-base font-medium flex items-center justify-center gap-1 border-b-[2px] outline-none cursor-pointer`
  return (
    <div className="w-full h-svh flex bg-bodyColor p-4 gap-4">
      {/* content */}
      <div className="flex-1 min-h-full">
        <TopBar />
      </div>
      {/* tweaks */}
      <div className="w-[32vw] max-w-[32vw] min-h-full bg-bodyColor">
        <div className="w-full h-full bg-white rounded-2xl py-5">
          <h1 className="px-5 text-xl font-medium mb-">Create Entries</h1>
          <div className="border-b border-stone-200 flex items-center justify-center gap-3 px-5">
            {/* tabs */}
            <button className={`${tabStyle} border-textColor `}>
              <LuListMinus className="text-lg" />
              Entry Lists
            </button>
            <button className={`${tabStyle} text-textColorWeak border-transparent`}>
              <LuFileSpreadsheet className="text-lg" />
              Excell Sheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
