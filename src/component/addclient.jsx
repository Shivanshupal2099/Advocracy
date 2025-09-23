function Addclient()
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
                    .addclient
                    {
                       border:2px solid gray;
                       box-shadow:9px 19px 2px  black;
                       height:600px;
                       border-radius:10px;
                       width:900px;
                       background-color:white;
                       position:fixed;
                       left:20%;
                       top:10%;
                       z-index:2;
                    }
                       form
                       {
                          margin-top:50px;
                          margin-left:50px;
                       }
                       input[type="text"]
                       {
                         height:30px;
                         width:250px;
                         margin-top:10px;
                         border-radius:10px;
                         padding-left:10px;
                         
                       }

                         input[type="radio"]
                         {
                           height:20px;
                           width:40px;
                           margin-top:10px;
                         border-radius:10px;
                         padding-left:10px;

                         }
                         #gender
                         {
                         margin:30px;
                         }

                         input[type="date"]
                         {
                           height:30px;
                           width:120px;
                           margin-top:10px;
                           border-radius:10px;
                           padding-left:10px;
                         }

                         input[type="tel"]
                         {

                         height:40px;
                           width:180px;
                           margin-top:10px;
                         border-radius:10px;
                         padding-left:10px;
                         }
                         #Typeofcase
                         {
                           marginLeft:20px;
                         }

                         input
                         {
                           margin-left:20px;
                         }
                         
                       
                `
            }
        </style>

         <div  className="addclient">
            <h1 style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Add client</h1>
            <hr />
            <form action=""  >
               <div id="name" style={{display:"flex",flexDirection:"column"}}>
                   <div style={{display:"flex",flexDirection:"row"}}>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" placeholder="Enter First name" />
                    </div>
                    <div id="Typeofcase">
                        <label htmlFor="caseType">Case type</label>
                        <select id="caseType" aria-label="Choose case type" style={{ color:"gray",height:"30px",width:"159px",paddingLeft:"10px",borderRadius:"10px",marginLeft:"15px",marginTop:"20px"}}>
                        <option value="" disabled selected>— Select a case type —</option>
                        <option value="criminal">Criminal Cases</option>
                        <option value="civil">Civil Cases</option>
                        <option value="constitutional">Constitutional Cases</option>
                        <option value="administrative">Administrative / Regulatory Cases</option>
                        <option value="family">Family Cases</option>
                        <option value="commercial">Commercial / Corporate Cases</option>
                        <option value="labor">Labor / Employment Cases</option>
                        <option value="consumer">Consumer Cases</option>
                        <option value="taxation">Taxation Cases</option>
                        <option value="environmental">Environmental Cases</option>
                        <option value="human_rights">Human Rights Cases</option>
                        <option value="international">International Law Cases</option>
                        <option value="ipr">Intellectual Property (IPR) Cases</option>
                        <option value="election">Election Cases</option>
                        <option value="cybercrime">Cybercrime / Digital Law Cases</option>
                        </select>
                    </div>
                   </div>

                    <div>
                        <label htmlFor="lname" style={{marginTop:"10px"}}>Last Name</label>
                    <input type="text" id="lname" placeholder="Enter last name" />
                    </div>
               </div>

              
               <div id="gender" style={{display:"flex",flexDirection:"row"}}>
                 <label htmlFor="">Gender</label>
                   <input type="radio" name="gender" id="male" />
                   <label htmlFor="male">Male</label>
                   <input type="radio" name="gender" id="female" />
                   <label htmlFor="female">Female</label>
               </div>

               <div style={{display:"flex",flexDirection:"row"}}>
                   <label style={{marginTop:"10px"}} htmlFor="">Date of birth</label>
                   <input type="date" />
               </div>

               <div>
                  <label htmlFor="tel">Phone number</label>
                  <input type="tel" placeholder="Enter phone number"/>
               </div>

               <div style={{marginTop:"30px"}}>
                  <label  htmlFor="Address">Address</label>
                  <textarea name="Address" id="address" style={{padding:"20px",rows:"10",cols:"60",borderRadius:"10px"}} placeholder="Enter address"></textarea>
               </div>


               <button style={{height:"50px",width:"100px",borderRadius:"10px",backgroundColor:"black",color:"white",marginTop:"30px",position:"absolute",right:"20px"}}>Add Client</button>
                 
                   

               
            </form>

         </div>
        </>
    );
}

export default Addclient;