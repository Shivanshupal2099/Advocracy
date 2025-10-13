import { GoStarFill } from "react-icons/go";
import Reviewbox from "./reviewbox";
function Review()
{
    return(
        <>

         <style>
          {
            `
              //  .boxing
              //  {
              //   marginLeft:10px;
              //  }
            `
          }
         </style>
             <div style={{backgroundColor:"whitesmoke",gap:"5px",padding:"60px",marginTop:"40px",border:"1px solid #e1e4e8",borderRadius:"40px"}}>
                  <h1 style={{textAlign:"center",margin:"20px",backgroundColor:"#5aff77",color:"black",padding:"15px",borderRadius:"15px"}}>Client Review</h1>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",marginTop:"90px",rowGap:"50px"}}>
                      <Reviewbox />
                        <Reviewbox />
                        <Reviewbox />
                        <Reviewbox />
                        <Reviewbox />
                  </div>
              </div>

              
             
        </>
    );
}
export default Review;