import { FaUpload } from "react-icons/fa6";

function Document()
{
    return(
        <>
        <div style={{height:"700px",width:"790px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#F7F7F7",position:"fixed"}}>
            <h1 style={{padding:"10px"}} align="center">Case Document</h1>
            <hr />
            <div style={{marginLeft:"40px",marginTop:"40px",height:"100px",width:"100px",borderRadius:"30px",backgroundColor:"#e0e0e0ff"}}>

                <FaUpload style={{height:"60px",width:"65px",margin:"20px"}}/> <h4>Click to add document </h4>
                  
            </div>
        </div>
        
        </>
    )

}

export default Document;