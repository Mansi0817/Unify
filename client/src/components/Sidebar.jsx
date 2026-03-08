import React from "react";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800 text-white p-4">

      <h1 className="text-2xl font-bold mb-6">
        Unify
      </h1>

      <nav className="space-y-4">

        <a href="/dashboard" className="hover:text-blue-400">
          Dashboard
        </a>

        <a href="/chat" className="hover:text-blue-400">
          Chat
        </a>

        <a href="/videocall" className="hover:text-blue-400">
          Video Call
        </a>

        <a href="/profile" className="hover:text-blue-400">
          Profile
        </a>

        <a href="/settings" className="hover:text-blue-400">
          Settings
        </a>

      </nav>

    </div>
  );
}