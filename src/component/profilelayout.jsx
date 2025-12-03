import Profile from "../pages/Profile";
import { Outlet } from "react-router-dom";
function  Profilelayout()
{
    return(
        <>
            <div style={{display:"flex",flexDirection:"column"}}>  
                <div>
                    <Profile/>
                </div>
                <div style={{marginLeft:'25px',marginTop:"25px"}}>
                    <Outlet/>
                </div>
            </div>
          
        </>
    )
}

export default Profilelayout;