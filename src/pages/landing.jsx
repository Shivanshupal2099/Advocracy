import advocracy from '../assets/advocracy-logo.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Landing()
{
     const navi = useNavigate();
     
     useEffect(() => {
         setTimeout(() => {
          navi('/login');
        }, 5000);
        
     }, [navi]);

    return(
        <> 
          
            <div className="logobox" style={{height:'250px',width:'250px',marginTop:"230px",marginLeft:"650px"}}>
                    <img src={advocracy} alt="Advocracy Logo" style={{height:"250px",width:"250px"}} />
            </div>
        </>
    )
}
export default Landing;
