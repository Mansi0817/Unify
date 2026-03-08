import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">
          Settings
        </h1>

        <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-4">

          <button className="bg-gray-700 w-full p-2 rounded">
            Change Password
          </button>

          <button className="bg-gray-700 w-full p-2 rounded">
            Notification Settings
          </button>

          <button className="bg-red-600 w-full p-2 rounded">
            Delete Account
          </button>

        </div>

      </div>
    </div>
  );
}