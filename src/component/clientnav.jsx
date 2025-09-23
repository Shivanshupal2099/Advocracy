import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Clientnav()
{  
    return(

        <>
          <style>
            {
                `
                *
                {
                    margin:0;
                    padding:0;
                }
                    .clientbutton
                    {
                       
                       background-color:black;
                       color:white;
                       padding-top:15px;
                       padding-bottom:15px;
                       padding-left:22px;
                    
                       padding-right:22px;
                       height:40px;
                       width:120px;
                       margin-left:20px;
                       margin-top:50px;
                       border-radius:50px;
                       text-decoration:none;
                    }
                       .navblock
                       {
                            height:40px;
                            width:650px;
                            padding:10px;
                            margin-left:120px;
                            margin-top:10px;
                            border-radius:20px;
                       }


                `
            }
          </style>
               <div style={{display:'flex', flexDirection:"column"}}>
                <div className="navblock">
                   <NavLink style={{height:"150px",width:"120px",backgroundColor:"black",color:"white"}} className="clientbutton" to=''>Detail</NavLink>
                   <NavLink className="clientbutton" to='caseshistory'>Case history</NavLink>
                   <NavLink className="clientbutton" to='document'>Document</NavLink>
                   <NavLink className="clientbutton" to='message'>Message</NavLink>
                   <NavLink className="clientbutton" to='status'>Status</NavLink>
               </div>
               <div >
                <Outlet/>
               </div>
               </div>
               
        </>
    )
}

export default Clientnav;