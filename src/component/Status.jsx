import { FaBriefcase } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { LuAward } from "react-icons/lu";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function Status()
{
    const [activeNav, setActiveNav] = useState(null);
    return(
        <>

        <style>
            {
                `
                *{
                  margin:0;
                  padding:0;
                }
                  #boxing
                  {
                    
                    
                    height:50px;
                    width:50px;
                    border-radius:30px;
                    background-color:#e0e0e0ff;
                    text-align:center;
                    justify-content:center;
                    padding-top:01px;
                    margin-left:80px;
                  }
                    #logo
                    {
                      
                      margin:auto;
                       height:50px;
                       width:30px;
                    }
                       
                `
            }
        </style>
             <div style={{height:"700px",width:"790px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#F7F7F7",position:"fixed"}}>
                 <div style={{textAlign:"center",padding:"10px"}}>
                    <h1>Status</h1>

                    

                 </div>
                 <hr />

                 <div>
                        <div style={{display:"flex",flexdirection:"row", width:"90%",marginTop:"50px",margin:"10px",padding:"auto"}}>

                            <NavLink className="casefiled" to='casefiled' style={{color:"black",textDecoration:"none"}} onClick={() => setActiveNav('casefiled')}>
                                <div id="boxing" style={{ backgroundColor: activeNav === 'casefiled' ? '#C0FFB5' : '#e0e0e0ff' }}>
                                    <div>
                                        <FaBriefcase style={{paddingTop:"17px"}}/>
                                    </div>
                                    <h6>Case Filed</h6>
                                </div>
                            </NavLink>


                            <NavLink to="inprogress"  style={{color:"black",textDecoration:"none"}} onClick={() => setActiveNav('inprogress')}>
                                <div id="boxing" style={{ backgroundColor: activeNav === 'inprogress' ? '#C0FFB5' : '#e0e0e0ff' }}>
                               <div>
                                 <GiProgression id="logo" />
                               </div>
                               <h6>In Progress</h6>
                            </div>
                            </NavLink>



                            <NavLink to="scheduled" style={{color:"black",textDecoration:"none"}} onClick={() => setActiveNav('scheduled')}>
                                <div id="boxing" style={{ backgroundColor: activeNav === 'scheduled' ? '#C0FFB5' : '#e0e0e0ff' }}>
                                <div>
                                    <GrSchedule id="logo" />
                                </div>
                                <h6>Scheduled</h6>
                            </div>
                            </NavLink>



                           <NavLink to="judgement" style={{color:"black",textDecoration:"none"}} onClick={() => setActiveNav('judgement')}>
                             <div id="boxing" style={{ backgroundColor: activeNav === 'judgement' ? '#C0FFB5' : '#e0e0e0ff' }}>
                                <div>
                                    <LuAward id="logo" />
                                </div>
                                <h6>Judgement</h6>
                            </div>
                           </NavLink>



                            <NavLink to="closed" style={{color:"black",textDecoration:"none"}} onClick={() => setActiveNav('closed')}>
                                <div id="boxing" style={{ backgroundColor: activeNav === 'closed' ? '#C0FFB5' : '#e0e0e0ff' }}>
                                <div>
                                    <IoCheckmarkDoneCircle id="logo"  />
                                </div>
                                <h6>Closed</h6>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                 <div>

                    <Outlet/>

                 </div>
             </div>

       
        </>
    )
}
export default Status;