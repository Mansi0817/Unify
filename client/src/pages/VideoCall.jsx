import Sidebar from "../components/Sidebar";
import VideoControls from "../components/VideoControls";
import Whiteboard from "../components/Whiteboard";

export default function VideoCall() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <div className="flex-1 grid md:grid-cols-2 gap-4 p-4">

          <div className="bg-black rounded-lg flex items-center justify-center">
            <p>Video Stream</p>
          </div>

          <Whiteboard />

        </div>

        <VideoControls />

      </div>
    </div>
  );
}