function Editpopup()
{
    return(
        <>

          <style>
            {
                `
                *{
                    margin:0;
                    padding:0;
                }
                 input{
                   margin-bottom:40px;
                    height:40px;
                    width:220px;
                    padding-left:20px;
                    border-radius:50px;
                    margin-left:5px;
                    margin-top:5px;

                 }
                    #male ,#female
                    {
                        margin-left:50px;
                        margin-right:50px;
                        height:20px;
                        width:20px;
                    }
                        .account
                        { 
                          box-shadow:12px 14px 15px black;
                         
                        }
                          label{
                          margin-top:20px;
                          margin-right:15px;
                          }

                          select{
                            height:40px;
                            width:200px;
                            border-radius:20px;
                            }

                            #state
                            {
                              margin-top:40px;
                            }
                            #state select
                            {
                              margin-left:40px;
                            }
                `
            }
          </style>

           <div class="account" style={{color:'gray', height:"600px",width:"800px",border:'2px solid black',borderRadius:"25px",zIndex:"1",position:"fixed",backgroundColor:"white",left:"25%",top:"10%",overflow:"auto" }}>
            <h3 style={{marginTop:"30px",textAlign:"center",marginBottom:"30px",color:'blue'}}> EDIT PROFILE </h3>
            <hr size="3"  style={{backgroundColor:'black'}} />
            <div style={{marginLeft:"50px",marginTop:"50px",display:"flex",flexDirection:"row"}}>
                <form action="">
                      <div style={{display:"flex",flexDirection:"row"}}>
                        <label class="text-label" htmlFor="firstname"><h5>First Name</h5></label>
                    <input type="text" placeholder="Enter firstname" />
                    <label style={{marginLeft:"19px"}} htmlFor=""><h5>Last Name</h5></label>
                    <input type="text" placeholder="Enter last name"/>
                      </div>
                     <div style={{display:"flex",flexDirection:"row"}}>
                        <label htmlFor=""><h5>Email</h5></label>
                        <input type="email" placeholder="Enter email"/><br />

                        <label  htmlFor=""><h5 style={{marginLeft:"10px"}} >Password</h5></label>
                       <input type="password" placeholder="Enter password"/>
                     </div>

                     <label >Gender</label>
                        <input  type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio"  id="female" value="female" name="gender"/>
                        <label htmlFor="female">Female</label>

                        <br />
                    

                      <label for="country">Select Country:</label>
                          <select id="country" name="country">
                            <option value="">-- Select Country --</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="JP">Japan</option>
                            <option value="CN">China</option>
                            <option value="BR">Brazil</option>
                          </select>  <br />



                          <label for="state">Select State:</label>
                              <select id="state" name="state">
                                <option value="">-- Select State --</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CG">Chhattisgarh</option>
                                <option value="GA">Goa</option>
                                <option value="GJ">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OD">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TS">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="UK">Uttarakhand</option>
                                <option value="WB">West Bengal</option>
                               
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="CH">Chandigarh</option>
                                <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="LA">Ladakh</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="PY">Puducherry</option>
                              </select>  <br /><br />
                        
                    <button style={{height:"40px",width:"105px",borderRadius:"30px",backgroundColor:"black",color:"white", position:"relative",left:"45%"}} type="submit">Submit</button>
                </form>
            </div>
           </div>
        </>
    )
}
export default Editpopup;