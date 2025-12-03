import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { HiCalendarDateRange } from "react-icons/hi2";
import { useState } from "react";
import Editcontact from "./editcontact";
function Contactinfo()
{

    const [contactData, setContactData] =useState(false)

    return(
        <>
        {
            contactData?<Editcontact/>:null
        }
        <style>
            {
                `
                *{
                    margin:0;
                    padding:0;
                }
                    label
                    {
                    margin:20px;
                    }
                `
            }
        </style>
         <div style={{border:"1px solid white",padding:"30px",marginTop:"100px",borderRadius:"30px",backgroundColor:"#9195ff",height:"700px"}}>
            <div style={{textAlign:"center"}}>
                <h1>Contact info</h1>
            </div>
           <div style={{backgroundColor:"white",marginTop:"50px",borderRadius:"15px",padding:"40px"}}>
                        {/* Edit contact info */}
                        <div style={{display:"flex",flexDirection:"row-reverse" }}>
                            <button  onClick={()=>{setContactData(!contactData)}} style={{marginRight:"20px",marginTop:"20px",height:"30px",width:"120px",paddingTop:"15px",paddingBottom:"30px",backgroundColor:"black",color:"white",borderRadius:"50px"}} >Edit Contact</button>
                        </div>
                    <h1 >Contact info </h1>
                    <form action=""style={{display:"flex",flexDirection:'column'}}>
                        <label htmlFor="" id="" ><MdEmail/>sophia.chen@lawfirmos.com</label>
                        <label htmlFor=""> < BsFillTelephoneFill/> (555) 123-4567</label>
                        <label htmlFor=""> <IoLocationSharp/> 123 Legal Avenue, Suite 400, Juris City, JL 90210</label>
                        <label htmlFor=""> <HiCalendarDateRange/> Available for Consultation</label>

                        
                    </form>
           </div>


           
         </div>


         
        </>
    );
}

export default Contactinfo;