import React from "react";
import TopBar from "../components/TopBar";

function Home() {
  return (
    <div className="w-full h-svh flex bg-bodyColor p-4 gap-4">
      {/* content */}
      <div className="flex-1 min-h-full">
        <TopBar />
      </div>
      {/* tweaks */}
      <div className="w-[32vw] max-w-[32vw] min-h-full bg-bodyColor">
        <div className="w-full h-full bg-white rounded-2xl">
          <div className="border-b border-stone-200 flex items-center justify-center">
            {/* tabs */}
            <button className="w-full py-3 px-6 text-sm"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
