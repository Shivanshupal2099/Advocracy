import { useState } from "react";
import { FaUpload } from "react-icons/fa6";

function Document()
{

    

    const[storedocument,setdocument]=useState([]);

    const [document,setDocument]=useState();
    

    const  addDocument=()=>{
    
        setdocument(prev=>[...prev, { id: Date.now(), document }]);
    
    
    }
    return(
        <>
        <div style={{height:"700px",width:"790px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#F7F7F7",position:"fixed"}}>
            <h1 style={{padding:"10px"}} align="center">Case Document</h1>
            <hr />
            <div style={{marginLeft:"40px",marginTop:"40px",height:"100px",width:"100px",borderRadius:"30px",backgroundColor:"#e0e0e0ff"}}>

                <FaUpload onChange={(e)=>setDocument(e.target.files)} onClick={addDocument} style={{height:"60px",width:"65px",margin:"20px"}}/> 
                <input type="file"/>                                     
                <h4>Click to add document </h4>
                  
            </div>


            {
                storedocument.map((doc,index)=>
                (
                        <div key={index} style={{marginLeft:"40px",marginTop:"40px",height:"100px",width:"100px",borderRadius:"30px",backgroundColor:"black",border:"1px solid red"}}>

                            <img src={doc.document} style={{height:"60px",width:"65px",margin:"20px"}}/>

                        </div> 
                )
                )

            }
        </div>
        
        </>
    )

}

export default Document;