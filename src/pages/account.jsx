function Account()
{
    return(
        <>

        <style>

            {
                `
                *{
                margin:0;
                paddng:0;
                }


                .box{
                height:520px;
                width:340px;
                padding:30px;
                border-radius:10px;
                border:2px solid gray;
                margin-left:560px;
                margin-top:90px;
                box-shadow: 6px 9px 5px black ;
                
                }

                .input-box{

                 height:15px;
                 width:260px;
                 border-radius:5px;
                 padding:10px;
                 margin:10px;
                 
                }
                `
            }
        </style>

          <div class="box">  
            <form action="">


                <h3 style={{marginLeft:"120px"}}>Create Account</h3><br />

                <hr /><br />
                  

                  <div style={{display:"flex", flexDirection:'column'}}>


                        
                        <label htmlFor=""><h3 style={{color:'gray'}}>First Name</h3></label>
                        <input class="input-box" type="text" />
                        

                        <label htmlFor=""><h3 style={{color:'gray'}}>Last Name</h3></label>
                        <input  class="input-box" type="text" />

                        <label htmlFor=""><h3 style={{color:'gray'}}>Email</h3></label>
                        <input class="input-box" type="email" />

                        <label htmlFor=""><h3  style={{color:'gray'}}>Password</h3></label>
                        <input class="input-box" type="password"  />
                  </div>

                <label htmlFor="">Gender</label>

                <input type="radio" id="male" value="male" name="gender"/>
                <label htmlFor="male">Male</label>

                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
                <br />


                <button  style={{marginLeft:'130px',marginTop:"35px",height:"40px",width:"100px",borderRadius:"10px",backgroundColor:"black",color:"white"}}>Sign up</button>





                </form> </div>
        </>
    );
}
export default Account;