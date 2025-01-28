import React from "react";

function Home() {
  return (
    <div className="w-full h-svh flex bg-bodyColor">
      {/* content */}
      <div className="flex-1 min-h-full"></div>
      {/* tweaks */}
      <div className="w-[32vw] max-w-[32vw] min-h-full bg-bodyColor p-4">
        <div className="w-full h-full bg-white rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Home;
