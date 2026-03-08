import Sidebar from "../components/Sidebar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

export default function Chat() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Chat Room</h2>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">

          <ChatMessage text="Hello!" sender="other" />
          <ChatMessage text="Hi there!" sender="me" />

        </div>

        <ChatInput />

      </div>
    </div>
  );
}