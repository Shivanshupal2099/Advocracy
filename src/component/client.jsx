import { Outlet } from "react-router-dom";
import Clientnav from "./clientnav";
function Client()
{
    return(
        <>
        <div style={{height:"60px",width:"1090px",borderRadius:"50px",border:"1px solid #c4c4c4ff",backgroundColor:"#f0f0f0ff",marginLeft:"20px",display:"flex",flexDirection:"column"}}>
            <Clientnav/>
        </div>
        </>
    );
}
export default Client;