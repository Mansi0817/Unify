import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <div className="p-6 grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold">Chats</h2>
            <p className="text-gray-400 mt-2">Open conversations</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold">Video Calls</h2>
            <p className="text-gray-400 mt-2">Start meeting</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold">Groups</h2>
            <p className="text-gray-400 mt-2">Manage groups</p>
          </div>

        </div>

      </div>
    </div>
  );
}