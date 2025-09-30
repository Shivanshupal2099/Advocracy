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
            body{
                 background-color:#38ff81ff;
            }
            .box{
              margin-left:620px;
              margin-top:149px;
              border-radius:10px;
              box-shadow: 9px 20px 9px black ;
            }

            .box:hover
            {
                transform: scale(1.09);
            }
             
            .stylebox{
                padding:10px;
                border-radius:7px;
                border:2px solid black;
                width:220px;
              }
              .stylebox:hover{
                  border:1px solid black;
                  width:230px;
                  border-radius:10px;
                  padding-left:20px;

               }

            `}
         </style>
        <div class="login box" style={{height:"400px",width:"290px",backgroundColor:"white",padding:"30px"}}>
            <h2 style={{textAlign:"center",color:"black"}}>Login in</h2><br />
           

            <form action="" style={{}}>
                 <hr /><br />
                <div  style={{display:"flex",flexDirection:"column",gap:"20px"}}> 
                    <label htmlFor="email"><h3 style={{color:'black'}}>Email id</h3> </label>
                <input class="stylebox" placeholder="Enter your email" type="email" />
                <label htmlFor="password"><h3 style={{color:'black'}}>Password</h3></label>
                <input placeholder="Enter your password" class="stylebox" type="password" />

                <button onClick={hadlepage} class="login-in" style={{width:"100px",height:"50px",borderRadius:"10px",backgroundColor:"black",color:"white",marginLeft:"100px",marginTop:"50px"}}>Login in</button>
                </div>

            </form>

         </div>
        </>
    )
}

export default Login;

// backgroundColor:"#38ff81ff"