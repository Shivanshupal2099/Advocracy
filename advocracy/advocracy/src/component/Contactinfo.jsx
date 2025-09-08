import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
function Contactinfo()
{
    return(
        <>
               <div className="quickstat" style={{ minHeight:"590px",width:"1120px",paddingTop:"10px",backgroundColor:"white",marginLeft:"40px",borderRadius:"20px"}}>
                  <div style={{marginLeft:"80px",color:"black"}}>
                    <h2 >Contact info</h2>
                    <hr />
                  </div>

                  <div className="contactdetail" style={{ marginLeft: "80px", display: "flex", flexDirection: "row", gap: "20px" }}>
                        <div style={{display: "flex", flexDirection: "column"}} >
                            <div className="phone">
                            <label><h3> <FaPhoneVolume />  Phone Number</h3></label>
                            <h5>9336371663</h5>
                      </div>

                      <div className="email">
                            <label><h3> <MdEmail />    Email ID</h3></label>
                            <h5>palshivanshu2005@gmail.com</h5>
                      </div>

                      <div className="location">
                            <label><h3> <FaLocationDot/>  Office Location</h3></label>
                            <h5>Panki, Kanpur 162</h5>
                      </div>
                        </div>

                      <div className="maplocation" style={{marginTop:"50px", width: "100%", maxWidth: "500px",marginLeft:"200px", height: "350px", position: "relative", overflow: "hidden" }}>
                         <iframe
                           src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2584.236272526817!2d80.23019931158102!3d26.47947536998697!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1757312496927!5m2!1sen!2sin"
                           width="100%"
                           height="100%"
                           style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                           allowFullScreen
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                         ></iframe>
                      </div>
                     
                  </div>


                 
                
                
               </div>
        </>
    );
}
export default Contactinfo;