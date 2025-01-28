import React from "react";
import TopBar from "../components/TopBar";
import { LuFileSpreadsheet, LuListMinus } from "react-icons/lu";

function Home() {
  const tabStyle = `w-full py-2 px-2 text-base font-medium flex items-center justify-center gap-1 border-b-[2px] outline-none cursor-pointer`;
  return (
    <div className="w-full h-svh flex bg-bodyColor p-4 gap-4">
      {/* content */}
      <div className="flex-1 min-h-full">
        <TopBar />
      </div>
      {/* tweaks */}
      <div className="w-[32vw] max-w-[32vw] min-h-full bg-bodyColor">
        <div className="w-full h-full bg-white rounded-2xl py-5 flex flex-col">
          <h1 className="px-5 text-xl font-medium mb-5 text-textColorWeak">
            Create Entries
          </h1>
          <div className="border-b border-stone-200 flex items-center justify-center gap-3 px-5">
            {/* tabs */}
            <button
              className={`${tabStyle} text-textColor border-textColor`}
            >
              <LuFileSpreadsheet className="text-lg" />
              Excell Sheet
            </button>
            <button className={`${tabStyle} text-textColorWeak border-transparent`}>
              <LuListMinus className="text-lg" />
              Entry Lists
            </button>
          </div>
          <div className="h-full py-10 flex flex-col items-center justify-center gap-3 px-5">
            <img src="./assets/excell_example.png" className="h-[170px] rounded-2xl shadow-xl mb-3" />
            <h1 className="text-xl font-bold text-center">Import Excell File</h1>
            <h1 className="text-base max-w-[400px] mb-4 font-normal text-textColorWeak text-center">Pickerr will automatically detect first column, make sure your entries are in the correct comun</h1>
            <button
              className={`${tabStyle} max-w-[200px] border-transparent bg-mainColor text-white rounded-xl `}
            >
              Upload
            </button>
          </div>
          {/* <div className="flex-1 w-full p-5">
            <textarea
              name=""
              id=""
              placeholder="Paste list (separete entries by commas or space..."
              className="w-full h-full bg-bodyColor rounded-2xl p-4 text-lg outline-none text-textColor placeholder:text-textColorWeak/60 resize-none"
            ></textarea>
          </div> */}
          {/* <div className="flex items-center justify-center gap-3 px-5">
            <button
              className={`${tabStyle} border-transparent bg-textColor text-white rounded-xl `}
            >
              Pick
            </button>
            <button
              className={`${tabStyle} border-transparent bg-bodyColor rounded-xl`}
            >
              Clear
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
