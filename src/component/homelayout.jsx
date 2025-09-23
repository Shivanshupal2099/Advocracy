import Homesidebar from "./homesidebar";
import { Outlet } from "react-router-dom";
import Client from "./client";
function Homelayout()
{
    return(
        <>

          <div style={{display:"flex",flexDirection:"row"}}>
             <Homesidebar/>
             
             <Client/>
             

          </div>
        </>
    )
}
export default Homelayout;