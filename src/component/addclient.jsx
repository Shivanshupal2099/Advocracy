import { useState } from "react";

import profilelogo from '../assets/profilelogo.png'
function Addclient({ setuserdata, onClose })
{

  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [casetype,setcasetype]=useState('');
  const [gender,setgender]=useState('');
  const [dob,setdob]=useState('');
  const [phone,setphone]=useState('');
  const [address,setaddress]=useState('');
  const [profilephoto,setprofilephoto]=useState(null);


  const [dragUrl, setDragUrl] = useState("");

  const handledata=(e)=>{
    e.preventDefault();
    const photoToUse = dragUrl ? dragUrl : profilephoto;
    setuserdata(prev => [...prev, { id: Date.now(), name: `${firstname} ${lastname} `, firstname, lastname, casetype, gender, dob, phone, address, profilephoto: photoToUse }]);
       setfirstname('');
       setlastname('');
       setcasetype('');
       setgender('');
       setdob('');
       setphone('');
       setaddress('');
       setprofilephoto(null);
       setDragUrl("");
       onClose();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const url = e.dataTransfer.getData("text");
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
      setDragUrl(url);
      setprofilephoto(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


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
                       border:15px solid #000000ff;
                       
                       height:600px;
                       border-radius:35px;
                       width:900px;
                       background-color: #fbfbfbff;
                       position:fixed;
                       left:20%;
                       top:7%;
                       z-index:2;
                    }
                       .addclient:hover
                       {
                         transform: scale(1.02);
                         box-shadow:9px 18px 18px #4b6ffeff;
                         border-radius:30px;
                         border:15px solid #4b6ffeff;
                       }
                         .addclient:hover .heading
                         {
                           background-color: #4b6ffeff;
                           
                         }
                         .addclient:hover .heading h1
                         {
                           color: black;
                         }
                         .heading
                         {
                           background-color: #000000ff;
                         }
                         .heading h1
                         {
                           color: #ffffffff;
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
          <div className="heading" style={{height:"70px",borderRadius:"10px 10px 0px 0px"}}>
              <h1 style={{textAlign:"center",paddingTop:"20px",marginTop:"0px",marginBottom:"10px"}}>Add client</h1>

            </div>   
            <hr />
            <form onSubmit={handledata} action=""  >
               <div id="name"  style={{display:"flex",flexDirection:"column"}}>
                   <div style={{display:"flex",flexDirection:"row"}}>
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input onChange={(e)=>setfirstname(e.target.value)} type="text" id="fname" placeholder="Enter First name" />
                    </div>
                    <div id="Typeofcase">
                        <label htmlFor="caseType">Case type</label>
                        <select onChange={(e)=>setcasetype(e.target.value)} id="caseType" aria-label="Choose case type" style={{ color:"gray",height:"30px",width:"159px",paddingLeft:"10px",borderRadius:"10px",marginLeft:"15px",marginTop:"20px"}}>
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
                    <input onChange={(e)=>setlastname(e.target.value)} type="text" id="lname" placeholder="Enter last name" />
                    </div>
               </div>

             <div style={{display:"flex",flexDirection:"row"}}>
                        <div>
                          
                                    <div id="gender" style={{display:"flex",flexDirection:"row"}}>
                                      <label htmlFor="gender">Gender</label>
                                        <input onChange={(e)=>setgender(e.target.value)} type="radio" value="male" name="gender" id="male" />
                                        <label htmlFor="male">Male</label>
                                        <input onChange={(e)=>setgender(e.target.value)} type="radio" value="female" name="gender" id="female" />
                                        <label htmlFor="female">Female</label>
                                    </div>

                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <label style={{marginTop:"10px"}} htmlFor="">Date of birth</label>
                                        <input onChange={(e)=>setdob(e.target.value)} type="date" />
                                    </div>

                                    <div>
                                        <label htmlFor="tel">Phone number</label>
                                        <input onChange={(e)=>setphone(e.target.value)} type="tel" placeholder="Enter phone number"/>
                                    </div>

                                    <div style={{marginTop:"30px"}}>
                                        <label  htmlFor="Address">Address</label>
                                        <textarea onChange={(e)=>setaddress(e.target.value)} name="Address" id="address" style={{padding:"20px",rows:"10",cols:"60",borderRadius:"10px"}} placeholder="Enter address"></textarea>
                                    </div>
                        </div>
                      <div style={{marginLeft:"200px",marginTop:"20px"}}>

                            <label htmlFor="photoInput" onDrop={handleDrop} onDragOver={handleDragOver} style={{ border: "7px solid black", height: "200px", width: "200px", borderRadius: "100px", backgroundImage: `url(${dragUrl || profilephoto || profilelogo})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'inline-block', cursor: 'pointer' }}>

                            </label>
                              <input id="photoInput" onChange={(e)=>setprofilephoto(URL.createObjectURL(e.target.files[0]))} type="file" style={{display: 'none'}} />

                            <p style={{ marginTop: "9px",marginLeft:"20px" }}><b>Upload profile image</b></p>


                             <button type="submit" style={{height:"53px",width:"120px",borderRadius:"60px",backgroundColor:"#ffff4bff",color:"black",marginTop:"30px",position:"absolute",right:"180px",border:"4px solid black"}}>Add Client</button>
                 
                            
                          
                      </div>
             </div>
                   

               
            </form>

         </div>
        </>
    );
}

export default Addclient;