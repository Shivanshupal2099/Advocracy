import { AiOutlineRise } from "react-icons/ai";
function Quickstats()
{
    return(
        <>
               <div className="quickstat" style={{ minHeight:"400px",width:"1200px",backgroundColor:"white",marginLeft:"40px",borderRadius:"20px"}}>

                <div className="quickheading" style={{marginLeft:"20px",paddingTop:"20px"}}>
                      <h2>Performance Metrics</h2>
                </div>

                <div style={{display:'flex' ,flexDirection:"row",gap:"50px"}}>
                <div style={{height:"230px",width:"280px",border:"1px solid gray",marginLeft:"30px",borderRadius:"20px",boxShadow:"6px 12px #dadada" }}>
                    <h4 style={{marginLeft:"20px"}}>Total Cases Handled</h4>
                    
                     <h1 style={{textAlign:"center"}}>1025</h1>

                </div>
                <div style={{height:"230px",width:"280px",border:"1px solid gray",borderRadius:"20px",boxShadow:"6px 12px #dadada"}}>
                    <h4 style={{marginLeft:"20px"}}>Cases Solved</h4>

                    <h1 style={{textAlign:"center"}}>999</h1>

                </div>
                <div style={{height:"230px",width:"280px",border:"1px solid gray",borderRadius:"20px",boxShadow:"6px 12px #dadada"}}>
                     <h4 style={{marginLeft:"20px"}}>Active Cases</h4>
                     <h1 style={{textAlign:"center"}}>20</h1>

                </div>

                <div style={{height:"230px",width:"280px",border:"1px solid gray",borderRadius:"20px",boxShadow:"6px 12px #dadada"}}>
                     <h4 style={{marginLeft:"20px"}}>Success Rate</h4>

                     <h1 style={{textAlign:"center"}}> <AiOutlineRise style={{color:"green"}}/>44.4</h1>
                </div>


                </div>

                 
                
               </div>
        </>
    );
}
export default Quickstats;