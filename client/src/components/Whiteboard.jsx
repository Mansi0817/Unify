import React from "react";
import "../styles/layout.css"

export default function Whiteboard() {
  return (
    <div className="bg-white text-black p-4 rounded h-full">

      <h2 className="text-xl mb-4">
        Whiteboard
      </h2>

      <div className="border h-96"></div>

    </div>
  );
}