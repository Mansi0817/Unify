import Sidebar from "../components/Sidebar"
import "../styles/theme.css"

export default function Dashboard(){

return(

<div className="layout">

<Sidebar/>

<div className="main">

<h2>Dashboard</h2>

<div className="grid">

{/* Chat */}

<div className="card">

<h3>Group Chat</h3>

<div className="chat">

<div className="messages">

<div className="message">Hey team 👋</div>
<div className="message me">Working on the UI</div>
<div className="message">Looks great!</div>

</div>

</div>

<div className="chat-input">

<input placeholder="Type message"/>
<button>Send</button>

</div>

</div>

{/* Video */}

<div className="card">

<h3>Video Call</h3>

<div className="video-grid">

<div className="video-box">User 1</div>
<div className="video-box">User 2</div>
<div className="video-box">User 3</div>
<div className="video-box">User 4</div>

</div>

</div>

{/* Whiteboard */}

<div className="card">

<h3>Whiteboard</h3>

<div style={{
height:"200px",
background:"white",
borderRadius:"10px"
}}/>

</div>

{/* Profile */}

<div className="card">

<h3>User Profile</h3>

<div className="profile">

<img src="https://i.pravatar.cc/100"/>

<div>

<h4>Alex Johnson</h4>
<p>Full Stack Developer</p>

</div>

</div>

</div>

</div>

</div>

</div>

)

}