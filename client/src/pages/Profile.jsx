import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">
          Profile
        </h1>

        <div className="bg-gray-800 p-6 rounded-lg w-96">

          <p className="mb-2">Username: JohnDoe</p>
          <p className="mb-2">Email: john@email.com</p>

          <button className="mt-4 bg-blue-600 px-4 py-2 rounded">
            Edit Profile
          </button>

        </div>

      </div>
    </div>
  );
}