
import { FaMedal } from "react-icons/fa";
function Achievements()
{
    return(
        <>
               <div className="quickstat" style={{ minHeight:"400px",width:"1120px",backgroundColor:"#E8E6E6",marginLeft:"40px",borderRadius:"20px",padding:"50px"}}>
                    <div style={{paddingTop:"30px",boxShadow:"3px 9px black",paddingLeft:"100px",backgroundColor:"white",height:"180px" ,borderRadius:"20px",width:"930px",marginTop:"20px",marginBottom:"60px"}}>
                          <h2> <FaMedal/> Top legal Minds under 40 Award </h2>
                          <p>Recognized by the National Legal Association for
                            outstanding contributions to the field of corporate
                            <div style={{color:"blue"}}>Read more</div></p>

                    </div>


                     <div style={{paddingTop:"30px",boxShadow:"3px 9px black",paddingLeft:"100px",backgroundColor:"white",height:"180px" ,borderRadius:"20px",width:"930px",marginTop:"20px"}}>
                          <h2> <FaMedal/> Top legal Minds under 40 Award </h2>
                          <p>Recognized by the National Legal Association for
                            outstanding contributions to the field of corporate
                            <div style={{color:"blue"}}>Read more</div></p>

                    </div>
               </div>
        </>
    );
}
export default Achievements;