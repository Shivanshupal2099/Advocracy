function Editpop()
{
    return (
        <>
        <div style={{border:"1px solid gray",height:"500px",borderRadius:"30px",width:"600px",backgroundColor:"white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            
              <div style={{border:"1px solid red",width:"350px",marginTop:"50px",marginLeft:"40px"}}>
               <tr  >
                <td ><label htmlFor="firstname"> First Name</label></td>
                <td> <input type="text" name="firstname" id="firstname" /></td>
               </tr>
               <tr>
                <td><label htmlFor="lastname">Lastname</label></td>
                <td><input type="text" name="lastname" id="lastname" /></td>
               </tr>
              </div>
             </div>
        </>
    );
}
export default Editpop;