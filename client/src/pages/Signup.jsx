export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">

      <div className="bg-gray-800 p-8 rounded-lg w-96 text-white">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 bg-gray-700 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 bg-gray-700 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-gray-700 rounded"
        />

        <button className="w-full bg-blue-600 p-2 rounded">
          Signup
        </button>

      </div>

    </div>
  );
}