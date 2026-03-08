import "../styles/theme.css"
import {FaComments,FaVideo,FaUser} from "react-icons/fa"

export default function Sidebar(){

return(

<div className="sidebar">

<div className="logo">Unify</div>

<div className="nav-item">
<FaComments/> Chat
</div>

<div className="nav-item">
<FaVideo/> Video Call
</div>

<div className="nav-item">
<FaUser/> Profile
</div>

</div>

)

}