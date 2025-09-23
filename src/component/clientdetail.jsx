import verified from '../assets/verified.png'
import truth from '../assets/truth.png'
import signature from '../assets/signature.png'
import fingerprint from '../assets/fingerprint.png'
import { GoDotFill } from "react-icons/go";

function Clientdetail()
{
    return(
        <>
             <div style={{height:"700px",width:"790px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#ffffffff",position:"fixed"}} >
                     <h1 style={{padding:"10px"}} align="center">Client Detail</h1>
                     <hr style={{width:"100%",height:"2px",backgroundColor:"#000000ff"}} />

                    <div style={{fontFamily:"monospace",display:"flex",flexDirection:"row",marginTop:"20px",margin:"10px"}}>
                        
                        <div style={{backgroundImage:`url(${truth})`,height:"520px",boxShadow:"8px 9px 8px #393938ff",borderRadius:"30px",width:"940px",border:"1px solid #9c9c9cff",backgroundColor:"#ffffffff",paddingLeft:"20px",opacity:"0.8",backgroundSize:"43% 47%",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"}}>
                             <h3 style={{marginTop:"15x",fontFamily:"monospace",fontSize:"30px"}} align="center">INDIA</h3>
                             <hr />
                             <div style={{marginTop:"10px",right:"105px",borderRadius:"20px",width:"55px",backgroundColor:"#000000ff",marginLeft:"290px"}}>
                                <h6 style={{height:"20px",alignContent:"center",color:"white"}} > <GoDotFill style={{color:"white",fontSize:"20px",marginBottom:"-8px"}}/>Active</h6>
                            </div>
                            {/* name */}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px",marginTop:"35px"}}>
                                <label htmlFor="">Name :</label>
                                <div id="name"> <b>Shivanshu pal</b>
                                </div>
                            </div>

                            {/* Age */}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}}>
                                <label htmlFor="">Age :</label>
                                <div style={{marginLeft:"10px"}} id="firstname"> <b>06 <sup>th</sup>JUN 2005</b>
                                </div>
                            </div>

                            {/* Gender */}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}
                            }>
                                <label htmlFor="">Gender :</label>
                                <div style={{marginLeft:"10px"}} id="gender"> <b>Male</b>
                                </div>
                            </div>

                            {/*Address*/}
                            <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}
                            }>
                                <label htmlFor="">Address :</label>
                                <div style={{marginLeft:"10px"}} id="address"> <b>162 Panki Kanpur ,UP,INDIA</b>
                                </div>
                            </div>


                            {/* type of Case */}

                             <div style={{display:"flex",paddingLeft:"20px",paddingTop:"50px",flexDirection:"row",padding:"10px"}
                            }>
                                <label htmlFor="">Type of case :</label>
                                <div style={{marginLeft:"10px"}} id="casetype"> <b>Environmental Case </b>
                                </div>
                            </div>
                        </div>
                        <div style={{boxShadow:"8px 9px 8px #393938ff",display:"flex",flexDirection:"column",height:"520px",borderRadius:"50px",width:"600px",border:"1px solid #c3c3c3ff",backgroundColor:"#F7F7F7",marginLeft:"10px"}}>
                            <div >
                            <img src="https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d" style={{height:"300px",width:"300px",borderRadius:"50px",margin:"20px"}}  id="image" alt="" />

                            </div>
                            
                            <div style={{height:"200px",width:"300px",display:"flex",flexDirection:"row"}}>
                                <img src={signature} style={{height:"180px",width:"200px",borderRadius:"50px",margin:"20px"}} alt="" />
                                <img src={fingerprint} style={{height:"180px",width:"200px",borderRadius:"50px",marginLeft:"-100px"}} alt="" />
                                <img src={verified} style={{height:"150px",width:"250px",marginLeft:"-190px"}} alt="" />

                            </div>
                        </div>
                     </div>
             </div>
        </>
    )
}

export default Clientdetail;