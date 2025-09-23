import truth from '../assets/truth.png'
import { FaFilter } from "react-icons/fa";
import { useState } from 'react';
function Search()
{
 
    const [popup,setpopup]=useState(false);

    return (
        <>
             <div>
                <div className="header" style={{height:"90px",width:"1250px",marginTop:"50px", display:"flex", flexDirection:"row" }} >
                 <input type="search" placeholder="Search the client or lawyer" style={{height:"48px",width:"550px",paddingLeft:"20px",borderRadius:"80px",marginLeft:"200px"}} name="search"/>
                 <button style={{height:"45px",width:"120px",backgroundColor:"blue",color:"white",marginLeft:"50px"}}>Search</button>
                 
                 <button onClick={() => setpopup(!popup)} style={{border:"2px solid black",marginLeft:"30px",width:"110px",textAlign:"center",borderRadius:"10px",paddingTop:"10px",height:"50px"}}><FaFilter />Filter</button>
                 {
                    popup && popup? <div style={{backgroundColor:"red",height:'400px',width:"400px", position:"absolute", top:"140px", right:"0", zIndex:"10"}}>Filter Options Here</div>:null
                 }
             </div>
             <hr />

             <img src={truth} style={{opacity: 0.2,height:"300px",marginLeft:"500px",marginTop:"70px"}} alt="" />

             </div>


             
        </>
    );
}

export default Search;