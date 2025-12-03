import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Reviews()
{
    const [isHover, setIsHover] = useState(false);
    const [ish,seth]=useState(false);

    return(
        <>
               <div className="quickstat" style={{ minHeight:"400px",width:"1120px",backgroundColor:"white",padding:"50px",marginLeft:"40px",borderRadius:"20px",display:"flex",flexDirection:"row"}}>

                 <div 
                   style={{border:"1px solid gray", overflow: "hidden",borderRadius:"10px",height:isHover?"150px":"180px",marginRight:"30px",width:"400px",padding:"40px",boxShadow:"3px 10px  black"}}
                   onMouseEnter={() => setIsHover(false)}
                   onMouseLeave={() => setIsHover(true)}
                 >

                    <h3>Alex Johnson</h3>
                    <h6>April 15,2026   <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStarHalfStroke/></h6>
                    <p>This service exceeded all my expectations! The team was
                        incredibly responsive and delivered results faster than
                        anticipated. Highly recommend for anyone looking for top-notch
                        quality and efficiency.</p>
                        
                 </div>


                 <div style={{border:"1px solid gray",overflow:"hidden",borderRadius:"10px",height:ish?"150px":"180px",width:"400px",padding:"40px",boxShadow:"3px 10px  black"}}
                 onMouseEnter={()=>seth(false)}
                 onMouseLeave={()=>seth(true)}
                 >

                    <h3>Alex Johnson</h3>
                    <h6>April 15,2026   <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStarHalfStroke/></h6>
                    <p>This service exceeded all my expectations! The team was
                        incredibly responsive and delivered results faster than
                        anticipated. Highly recommend for anyone looking for top-notch
                        quality and efficiency.</p>
                        
                 </div>
                
               </div>
        </>
    );
}
export default Reviews;
