import { FaSearch } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

import truth from '../assets/truth.png';
function Askai()
{
    return (
        <>

             <div style={{height:"80vh",width:"80%", margin: 'auto', position: 'relative'}}>
                <div style={{position: 'absolute', top: 70, left: 110, width: '70%', height: '70%', backgroundImage: `url(${truth})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 0.2}}></div>
                <div style={{display:"flex",flexDirection:"row", marginLeft:"-90px",height:"40px",width:"1000px",backgroundColor:"#D4D4D4",border:"2px solid #F0F0F0",borderRadius:"50px",padding:"20px",position:"absolute",bottom:"-17%"}} >
                <input type="search" placeholder="Ask anything related to legal" style={{paddingLeft:"20px",borderRadius:"50px",height:"43px",width:"900px",marginLeft:"40px",border:"1px solid gray"}} />
                <FaCircleArrowRight style={{height:"35px",width:"35px" ,marginLeft:"20px",marginTop:"5px"}} />
                </div>
             </div>
        </>
    );
}

export default Askai;