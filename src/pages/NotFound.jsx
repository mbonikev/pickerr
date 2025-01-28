import React from "react";

function NotFound() {
  return (
    <div className="p-3 flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-1 text-mainColor">404</h1>
      <p className="text-xl mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-stone-800 text-white rounded-lg shadow hover:bg-mainColor/80 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;
