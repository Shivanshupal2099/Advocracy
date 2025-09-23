import { useState } from "react";
import Editpopup from "../component/editpopup";
import Profilenav from "../component/profilenav";
import { MdVerified } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

function Profile()
{
    

    const [editpopup,seteditpopup]=useState(false);
    return(
        <>

            <style>
                {
                    `

                .profilebox{
                    height:400px;
                    width:1130px;
                    border-radius:50px;
                    border:1px solid gray;
                    margin-top:25px;
                    background-color:white;
                   
                }
                    .photobox{

                    height:180px;
                    width:180px;
                    /* border:2px solid black; */
                    margin-top:50px;
                    margin-left:100px;
                    border-radius:30px;
                    }

                `
                }
            </style>

            {
                editpopup ? <Editpopup /> : null
            }
                <div style={{ display: "flex", flexDirection: "column" }}>

               
                    <div className="profilebox" style={{display:"flex",flexDirection:"column"}}>
                             
                             <div style={{display:"flex",flexDirection:"row"}}>
                                 <div className="photobox">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&w=1000&q=80" style={{ height: "180px", width: "180px", borderRadius: "90px" }} alt="" />
                            </div>
                            <div style={{  height: "80px", width: "350px", marginTop: "130px", marginLeft: "50px", borderRadius: "30px" }}>
                                
                                  <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                                     <div style={{display:"flex",flexDirection:"row"}}>

                                          <h3 style={{color:"blue"}}>Shivanshu pal</h3> <MdVerified style={{marginLeft:"12px",marginTop:"-3px",height:"30px",width:"30px"}} /> 

                                        </div><br />
                                    <div style={{display:"flex",flexDirection:"row",color:"gray"}}>
                                         <h4> <FaCalendarAlt style={{height:"20px",width:"20px"}} />  6TH JUN 2025</h4>
                                    </div>
                                  </div>
                            </div>

                        {/*  edit button */}
                        <div className="edit button" style={{ marginTop: "70px", marginLeft: "100px" }}>
                            <button onClick={() => seteditpopup(!editpopup)} style={{ height: '40px', width: "150px", backgroundColor: "black", color: "white", borderRadius: "10px" }}>
                                <h4>Edit</h4></button>
                        </div>
                             </div>

                        <Profilenav/>
                    </div>
                   
                  
                
                </div>
                
        </>
    )
}

export default Profile;
