import React from "react";
import "../styles/layout.css"
export default function Navbar() {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">

      <h2 className="text-lg font-semibold">
        Unify App
      </h2>

      <div className="flex gap-4">

        <button className="bg-blue-600 px-3 py-1 rounded">
          Notifications
        </button>

        <button className="bg-gray-700 px-3 py-1 rounded">
          Logout
        </button>

      </div>

    </div>
  );
}