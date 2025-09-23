
import './Client.css'
import Clientnav from "./clientnav";
import { Outlet } from "react-router-dom";
import Clientinfo from './clientinfo';
import Clientsidebar from './clientsidebar';
function Client(){
    return(
        <>
          

          <div style={{display:'flex',flexDirection:"column"}}>
              <Clientinfo/>
              <div style={{display:"flex", flexDirection:"row"}}> 
                 <Clientsidebar/>
                 <div style={{height:"600px",width:"900px",backgroundColor:'white',marginLeft:"10px",borderRadius:'20px'}} >
                    <Clientnav/>
                 </div>
                 

              </div>
              

              

          </div>
          
        </>
    );
}
export default Client;