import { useNavigate } from "react-router-dom";
function Account()
{

     const navi=useNavigate();
     
     const handlechange=(e)=>{
        e.preventDefault();
        navi('/home');
     }

    return (
        <>
           <div style={{border:"1px solid black",height:"650px",width:"950px", marginLeft:"350px",borderRadius:"20px"}}>
              
              <header >
                    <h3 align="center"> Create the account </h3>
              </header>
              <hr /><br />
              <form action="" style={{marginLeft:"50px"}}>
                

                 <tr>
                    <td>
                        <label htmlFor="firstname">First Name :</label>
                        <input type="text" name="firstname" style={{height:"40px",width:"250px",borderRadius:"10px",paddingLeft:"10px"}}/>
                    </td>
                    <td>
                        <label htmlFor="lastname" style={{ paddingLeft:"25px"}}>Last Name :</label>
                        <input type="text" name="lastname" style={{height:"40px",width:"250px",paddingLeft:"10px",borderRadius:"10px"}}/>
                    </td>
                 </tr>
                 <br />
                 <tr>
                    <td>
                          <label htmlFor="email">Email id :</label>
                          <input type="email" style={{height:"40px",width:"250px",borderRadius:"10px",paddingLeft:"10px"}}/>
                 
                    </td>
                 </tr><br />
                 <tr>
                    <td>
                        <label htmlFor="password">Password</label>
                        <input type="password" style={{height:"40px",width:"250px",borderRadius:"10px",paddingLeft:"10px"}} />
                    </td>
                 </tr>
                 <br />
                 <tr>
                   <td>
                        <label htmlFor="gender">Gender :</label>
                        
                         <input type="radio" name="gender" id="male" />
                         <label htmlFor="male"  >Male</label>
                          
                          <input type="radio" name="gender" id="female" />
                          <label htmlfor="female" >Female</label>
                   </td> 
                 </tr>
                 <br /><br />
                 <br />

                 <button onClick={handlechange} style={{marginLeft:"380px",border:"1px solid black"}}>Sign up </button>
              </form>

           </div>
        </>
    );
}

export default Account;