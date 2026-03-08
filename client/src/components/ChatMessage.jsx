import React from "react";

export default function ChatMessage({ text, sender }) {

  const isUser = sender === "me";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div
        className={`p-3 rounded-lg max-w-xs ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-white"
        }`}
      >
        {text}
      </div>

    </div>
  );
}