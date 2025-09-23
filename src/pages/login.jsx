import { useNavigate } from "react-router-dom";
function Login()
{


    const navi=useNavigate();
    const hadlepage=()=>{

        navi('/account');

    }

    return(
        <>

         <style>
            {`
            *{
            margin:0;
            padding:0;
            }
            .box{
              margin-left:560px;
              margin-top:149px;
              border-radius:30px;
              box-shadow:5px 9px black ;
            }
             
            .stylebox{
                padding:10px;
                border-radius:7px;
                border:2px solid black;
                width:220px;
              }
              .stylebox:hover{
                  border:1px solid black;
                  width:250px;
                  border-radius:50px;
                  padding-left:20px;

               }

            `}
         </style>
        <div class="login box" style={{height:"360px",width:"320px",border:"1px solid gray",backgroundColor:"white",padding:"30px"}}>
            <h2 style={{marginLeft:"125px",color:"black"}}>Login</h2><br />
           

            <form action="">
                 <hr /><br />
                <div  style={{display:"flex",flexDirection:"column",gap:"20px"}}> 
                    <label htmlFor="email"><h3 style={{color:'gray'}}>Email id</h3> </label>
                <input class="stylebox" type="email" />
                <label htmlFor="password"><h3 style={{color:'gray'}}>Password</h3></label>
                <input class="stylebox" type="password" />

                <button onClick={hadlepage} class="login-in" style={{width:"90px",height:"40px",borderRadius:"8px",backgroundColor:"black",color:"white",marginLeft:"100px"}}>Login in</button>
                </div>

            </form>

         </div>
        </>
    )
}

export default Login;