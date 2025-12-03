import advocracy from '../assets/advocracy.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './landing.css';

function Landing()
{
     const navi=useNavigate();

    useEffect(()=>{



        setTimeout(()=>{
            navi("/login");
        },3000)



    },[navi])
    return (
        <>
        <div className="landing-bg">
             <div>
                  <img src={advocracy} alt="logo" style={{marginLeft:"630px", height:"200px",marginTop:"250px"}}/>
              </div><br />
             

        </div>
        </>
    );
}

export default Landing;