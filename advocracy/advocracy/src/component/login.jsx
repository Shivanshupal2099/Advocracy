import { useNavigate } from "react-router-dom";

function Login(){


     const navi=useNavigate();

     const handlechange=()=>{

          navi("/account");
          
     }
    

   
    return (
        <>
            <div style={{backgroundColor:"white",color:"black", height:"480px", width:"400px",marginLeft:"620px",borderRadius:"30px",border:"1px solid black"}}>
                 
                 <header style={{height:"100px", width:"400px", backgroundColor:"#000000ff",color:"white", borderTopLeftRadius:"30px", borderTopRightRadius:"30px", textAlign:"center", paddingTop:"20px"}}>
                    <h2>Login account </h2>
                 </header>
                

                 <form action="" style={{marginLeft:"60px"}}><br/>
                    <label htmlFor="email">Email id :</label><br />
                     <input type="email" style={{height:"40px" ,width:"250px",borderRadius:"10px",paddingLeft:"20px"}}></input>
                     <br /><br />
                     <label htmlFor="password">Password</label><br />
                     <input type="password" name="password" style={{height:"40px" ,width:"250px",borderRadius:"10px",paddingLeft:"20px"}}/>
                     <br /><br /><br />
                     <button style={{border:"1px solid white",marginLeft:"78px" ,backgroundColor:"blue" ,color:"white" ,borderRadius:"20px"}}>LOGIN IN</button>
                     <br /><br />
                    
                 </form>
                  <hr />
                  <footer>
                    <p style={{textAlign:"center"}}>Don't have an account ? <a href="" onClick={()=>handlechange()} style={{color:"blue"}}>Sign up</a></p>
                    
                  </footer>
                  
            </div>
        </>
    );
}

export default Login;