import Settingnav from "../component/settingnav";
import { Outlet } from "react-router-dom";
function Setting()
{
    return(
        <>
            <h1>Setting page</h1>

           <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                
                <Settingnav/>
               
               
           </div>
        </>
    ) 
}

export default Setting;