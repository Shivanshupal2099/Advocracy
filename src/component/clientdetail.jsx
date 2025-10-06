import truth from '../assets/truth.png'
import { GoDotFill } from "react-icons/go";
import legallogo from '../assets/legallogo.png'
import profilelogo from '../assets/profilelogo.png'
import { useLocation } from 'react-router-dom'
import { RiDeleteBinLine } from "react-icons/ri";

function Clientdetail()
{
    const location = useLocation();
    const client = location.state?.client;

    if (!client) {
        return <div style={{textAlign:"center", marginTop:"50px"}}>Select a client to view details</div>;
    }

    return(


        <>


          <style>
            {
                `
                   .card {
                     border: 7px solid black;
                   }

                  
                     

                `
            }
          </style>
             <div style={{height:"700px",width:"810px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#ffffffff",position:"fixed"}} >
                     <div style={{display:"flex",flexDirection:"row",backgroundColor:"#000000ff",height:"70px",color:"white",borderRadius:"30px 30px 0px 0px"}}>
                       <div style={{marginLeft:"290px",marginTop:"10px",height:"50px",width:"195px"}}>
                         <h1 style={{textAlign:"center"}}>Client Detail</h1>
                       </div>

                     <div style={{marginLeft:"150px",marginTop:"10px",width:"120px",height:"50px",textAlign:"center"}}>
                        <button style={{border:"1px solid red",borderRadius:"10px",height:"40px",width:"120px",backgroundColor:"red",color:"white"}}>DELETE < RiDeleteBinLine/> </button>

                     </div>
                     </div>

                     <hr style={{width:"100%",height:"2px",backgroundColor:"#000000ff"}} />

                    <div  style={{fontFamily:"monospace",display:"flex",flexDirection:"row",marginTop:"20px",margin:"10px"}}>

                        <div className='card' style={{boxShadow:"8px 9px 8px #393938ff",display:"flex",flexDirection:"column",height:"520px",borderRadius:"50px",width:"380px",backgroundColor:"#F7F7F7",marginLeft:"10px"}}>

                            <div style={{backgroundColor:"#000000ff",height:"60px",width:"100%",borderTopLeftRadius:"40px",borderTopRightRadius:"40px",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"monospace"}}>
                                <h2>INDIA LEGAL BOOK</h2>
                            </div>
                            <hr />
                             <div style={{border:"1px solid gray",backgroundColor:"black",color:"white",margin:"20px",borderRadius:"20px",height:"550px"}}>

                            <div style={{ height: "245px", width: "380px" }}>

                                <img src={legallogo} style={{ height: "340px", marginLeft: "4px",color:"white" }} alt="" />

                            </div>
                            <div style={{ marginTop: "90px", paddingLeft: "22px" }}>
                                <h3 style={{textAlign:"center"}}>ISSUED UNDER MINISTRY OF LAW </h3>
                                <h2 style={{textAlign:"center"}}> [2025-2050]</h2>

                            </div> 

                             </div>                           

                           
                            
                        </div>
                        <div className='card ' style={{backgroundImage:`url(${truth})`,height:"520px",boxShadow:"18px 13px 2px black",borderRadius:"30px",width:"600px",backgroundColor:"#ffffffff",paddingLeft:"20px",opacity:"0.8",backgroundSize:"29% 33%",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"}}>
                        <div style={{height:"60px",width:"100%",color:"black",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"monospace"}}>
                                <h2 style={{textAlign:"center",backgroundColor:"black",color:"white",width:"300px",borderRadius:"10px",padding:"5px"}} >REPUBLIC OF INDIA - 1947</h2>
                            </div>                             <hr />
                             <div style={{marginTop:"10px",right:"105px",borderRadius:"20px",width:"55px",backgroundColor:"#000000ff",marginLeft:"290px",display:"flex",flexDirection:"row"}}>
                                <GoDotFill style={{paddingBottom:"5px",color:"white",fontSize:"20px",marginBottom:"-8px"}}/> 

                                <span style={{height:"20px",alignContent:"center",color:"white",paddingRight:"2px"}} > Active </span>
                            </div>




                           <div style={{display:"flex",flexDirection:"row"}}>
                            <div >
                                 {/* name */}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px",marginTop:"35px"}}>
                                <label htmlFor="">Name :</label>
                                <div id="name"> <b>{client.name}</b>
                                </div>
                            </div>

                            {/* Age */}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}}>
                                <label htmlFor="">Age :</label>
                                <div style={{marginLeft:"10px"}} id="firstname"> <b>{client.dob}</b>
                                </div>
                            </div>

                            {/* Gender */}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}
                            }>
                                <label htmlFor="">Gender :</label>
                                <div style={{marginLeft:"10px"}} id="gender"> <b>{client.gender}</b>
                                </div>
                            </div>
                            </div>
                            <div  style={{marginLeft:"70px",marginTop:"10px"}}>
                                   <div>

                                      <img src={client.profilephoto ? client.profilephoto : profilelogo} style={{height:"110px",width:"110px"}} alt="" />

                                   </div>
                            </div>
                           </div>

                            {/*Address*/}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}
                            }>
                                <label htmlFor="">Address :</label>
                                <div style={{marginLeft:"10px"}} id="address"> <b>{client.address}</b>
                                </div>
                            </div>


                            {/* Active Case */}

                             <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}
                            }>
                                <label htmlFor="">Active case :</label>
                                <div style={{marginLeft:"10px"}} id="casetype"> <b>{client.casetype}</b>
                                </div>
                            </div>
                        </div>
                        
                    </div>
             </div>
        </>
    )
}

export default Clientdetail;