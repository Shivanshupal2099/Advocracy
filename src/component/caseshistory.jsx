import { CiSearch } from "react-icons/ci";

function Caseshistory()
{
    return(
        <>

        <style>
          {
            `
               .icon:hover{
                  background-color:#EBEBEB;
               }
               `
          }
        </style>

          <div style={{height:"700px",width:"790px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#F7F7F7",position:"fixed"}}>
            <h1 style={{textAlign:"center"}}>Cases history</h1>
            <hr style={{marginTop:"10px"}}/>
            <div style={{display:"flex",flexDirection:"row"}}>
              <div>
              <input type="search" style={{height:"50px",width:"680px",borderRadius:"40px",paddingLeft:"20px",marginLeft:"29px",marginTop:"10px",border:"1px solid #EBEBEB"}} placeholder="Search the Case .." />
            </div>
            <div> <CiSearch className="icon" style={{height:"40px",width:"40px",borderRadius:"50px",padding:"10px",marginTop:"8px",marginLeft:"10px"}}/></div>
            </div>



          </div>
                
        </>
    );
}
export default Caseshistory;