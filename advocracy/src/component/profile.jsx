import { BrowserRouter,Router,Route,Routes,NavLink } from "react-router-dom";
import './Profile.css'


function Profile()
{
    return (
        <>
           <div className="profile" style={{display:"flex",flexDirection:"column"}}>
              <div style={{height:"350px",width:"1200px", borderRadius:"15px",marginTop:"30px",marginLeft:"20px",backgroundColor:"white",paddingTop:"10px",display:"flex",flexDirection:"row"}}>

            <div className="profile_data" style={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
                <div className="photo" style={{height:"150px",width:"150px",borderRadius:"80px",marginLeft:"30px",backgroundColor:"white"}}>
                    <img src="https://tse2.mm.bing.net/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" style={{height:"150px",width:"150px",borderRadius:"80px"}} alt="" />
                    </div>
                    <br /><br />
                
                            <div style={{marginTop:"35px",backgroundColor:"white",color:"black",marginLeft:"40px",borderRadius:"50px",height:"80px",width:"350px",border:"0px solid white",display:"flex",flexDirection:"column"}}>
                                <div className="name" style={{marginLeft:"40px",marginTop:"9px"}}> <h2>Shivanshu pal</h2> 
                                 <h2 style={{color:"blue"}}>Corporate Law & Mergers</h2>
                                 </div>

                                <p style={{marginLeft:"40px",color:"gray"}}>Joined: January 15, 2018</p>
                            </div>

            </div>

           <div className="edit" style={{marginLeft:"350px",marginTop:"100px"}}>
            <button style={{backgroundColor:"blue" ,color:"white"}}>Edit profile</button>
           </div>
          </div>

          <div className="tabslist" style={{display:"flex",flexDirection:"column"}}>


             <div className="navbar" style={{height:"30px",width:"1200px",padding:"30px",marginTop:"20px"}}>
                {/* <NavLink className={({isactive})=>isactive?'custom-active':'link'} style={{border:"1px solid white",borderRadius:"20px",backgroundColor:"white",color:"black",height:"30px",width:"100px",padding:"10px",marginLeft:"220px"}} >Quick Stats</NavLink> */}

                <NavLink style={{border:"1px solid white",borderRadius:"20px",backgroundColor:"white",color:"black",height:"30px",width:"100px",padding:"10px",marginLeft:"220px"}} to=''  >Quick Stats</NavLink>
                <NavLink style={{border:"1px solid white",height:"30px",width:"100px",borderRadius:"20px",backgroundColor:"white",color:"black",padding:"10px",marginLeft:"20px"}} to='achievements' >Achievements</NavLink>
                {/* <NavLink style={{border:"1px solid white",height:"30px",width:"100px",borderRadius:"20px",backgroundColor:"white",color:"black",padding:"10px",marginLeft:"20px"}} to='caseratings' >Case Ratings</NavLink> */}
                <NavLink style={{border:"1px solid white",height:"30px",width:"100px",borderRadius:"20px",backgroundColor:"white",color:"black",padding:"10px",marginLeft:"20px"}} to='casehistory' >Case History</NavLink>
                <NavLink style={{border:"1px solid white",height:"30px",width:"100px",borderRadius:"20px",backgroundColor:"white",color:"black",padding:"10px",marginLeft:"20px"}} to='reviews' >Reviews</NavLink>
                <NavLink style={{border:"1px solid white",height:"30px",width:"100px",borderRadius:"20px",backgroundColor:"white",color:"black",padding:"10px",marginLeft:"20px"}} to='contactinfo'>Contact Info</NavLink>


             </div>

           </div>

           </div>
        </>
    );
}

export default Profile;
