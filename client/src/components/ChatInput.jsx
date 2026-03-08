import React from "react";

export default function ChatInput() {
  return (
    <div className="flex gap-2 p-4 border-t border-gray-700">

      <input
        className="flex-1 bg-gray-800 text-white p-2 rounded"
        placeholder="Type message..."
      />

      <button className="bg-blue-600 px-4 rounded">
        Send
      </button>

    </div>
  );
}