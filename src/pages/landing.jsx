
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import legal from '../assets/legal.png'
function Landing()
{
     const navi = useNavigate();
     
     useEffect(() => {
         setTimeout(() => {
          navi('/login');
        }, 5000);
        
     }, [navi]);


      // backgroundColor:"#e7fc74ff"

    return(
        <> 
            <style>
              {`

                   *{
                    margin:0;
                    padding:0;
                   }

                   body {
                    background-color: #edf7a1ff;
                   }

               `}
            </style>
            <div className="logobox" style={{height:'250px',width:'250px',marginTop:"150px",marginLeft:"570px"}}>
                    <img src={legal} alt="Advocracy Logo" style={{height:"450px",width:"450px"}} />
                    <h1 style={{textAlign:"center",paddingLeft:"160px"}}>Adocracy </h1>
            </div>
        </>
    )
}
export default Landing;
