import { FaAward } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import Addachievement from "./addAchievement";
import { useState } from "react";

function Achievements()
{

    const [addachievement, setaddachievement]=useState(false);
    return(
        <>

        {
            addachievement ?<Addachievement/>:null
        }
         <style>
          {
            `
            *{
                margin:0;
                padding:0;
            }
            .Achievementsid{
                border-radius:10px;
                width:990px;
                height:500px;
                background-color:white;
                margin-left:30px;
                margin-top:30px;
                display:flex;
                flex-direction:column;
            }
                .awards
                {
                    margin-left:40px;
                    margin-top:40px;
                }
            `
          }
         </style>
            <div class="Achievementsid">
              <div style={{display:"flex",flexDirection:"row"}}>
                     <h1 style={{ textAlign:"center",paddingTop:"20px"}}>Achievements & Recognitions</h1>

                 {/*  add achievements */}
                <div>
                    <IoAddCircle onClick={()=>{setaddachievement(!addachievement)}} style={{height:"50px",width:"50px",display:"flex",flexDirection:"row-reverse",marginLeft:"450px",marginTop:"10px"}} />
                </div>
              </div>

             



              <div class="awards">  
                  
                   <p style={{ backgroundColor:"#F7F7F7",width:"50%",padding:"30px",borderRadius:"10px"}}> 
                    <div style={{display:"flex",flexDirection:"row"}}>
                         <FaAward style={{height:"30px",width:"30px"}} />  <h3>National Top 100 Litigators Award</h3>
                    </div>
                     <br />Recognized by The American Society of  
                    Legal Advocates  for exceptional litigation 
                    skills and client success in complex cases.</p>
              </div>

              <div class="awards">  
                  
                   <p style={{ backgroundColor:"#F7F7F7",width:"50%",padding:"30px",borderRadius:"10px"}}> 
                    <div style={{display:"flex",flexDirection:"row"}}>
                         <FaAward style={{height:"30px",width:"30px"}} /> <h3>Super Lawyers Honoree</h3>
                    </div>
                     <br />Selected as a 'Super Lawyer' for excellence in practice area: Business Litigation, representing top 5% of attorneys in the region.</p>
              </div>


              <div class="awards">  
                  
                   <p style={{ backgroundColor:"#F7F7F7",width:"50%",padding:"30px",borderRadius:"10px"}}> 
                    <div style={{display:"flex",flexDirection:"row"}}>
                         <FaAward style={{height:"30px",width:"30px"}} />  <h3>Certified Specialist in Corporate Law</h3>
                    </div>
                     <br />Achieved specialist certification in corporate law by the State Bar, demonstrating advanced knowledge and experience.</p>
              </div>

              <div class="awards">  
                  
                   <p style={{ backgroundColor:"#F7F7F7",width:"50%",padding:"30px",borderRadius:"10px"}}> 
                    <div style={{display:"flex",flexDirection:"row"}}>
                         <FaAward style={{height:"30px",width:"30px"}} />  <h3>Leading Lawyer in Commercial Arbitration</h3>
                    </div>
                     <br />Acknowledged by Legal 500 for outstanding contributions and successful outcomes in commercial arbitration proceedings.</p>
              </div>
              
            </div>
        </>
    )
}

export default Achievements;