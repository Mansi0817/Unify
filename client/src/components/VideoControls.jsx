import React from "react";
import "../styles/layout.css"

export default function VideoControls() {
  return (
    <div className="flex justify-center gap-4 p-4">

      <button className="bg-gray-700 px-4 py-2 rounded">
        🎤
      </button>

      <button className="bg-gray-700 px-4 py-2 rounded">
        📷
      </button>

      <button className="bg-gray-700 px-4 py-2 rounded">
        🖥 Share
      </button>

      <button className="bg-red-600 px-4 py-2 rounded">
        End
      </button>

    </div>
  );
}