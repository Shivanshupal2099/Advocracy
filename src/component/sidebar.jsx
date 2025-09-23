import { NavLink } from "react-router-dom";
import advocracy from '../assets/advocracy-logo.png'
import { IoIosSettings } from "react-icons/io";
function Sidebar()
{
    return(
        <>

        <style>{
            `
            *{
                margin:0;
                padding:0;

            }
            .navbarstyle{
            
                margin:10px;
                padding:10px;
                margin-left:30px;
                border-radius:50px;
                text-decoration:none;
                height:22px;
                width:180px;
                border:2px solid gray;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color:white;
                color: black;
                font-weight: 500;
                font-family: Arial, sans-serif;
             }
                .home{
                margin-top:70px;
                }
               
                .navbarstyle:hover
                {
                   width:170px;
                   background-color: #000000ff;
                   color:white;
                   border-radius:10px;
                }

            .navbarstyle.active {
             border-radius:50px;
                background-color: #000000ff;
                color:white;
                font-weight: 700;
            }

            .setting{

            margin-top:150px;
            border-radius:50px;
            background-color: #000000ff;
            color:white;

            }
            
            `
            }
        </style>
         <div style={{position:"fixed"}} >

             <div>
                <img src={advocracy}  style={{height:"130px",width:"150px",marginLeft:"60px",marginTop:"20px"}} alt="logo_advocracy" />
             </div>
             <hr />

            <div style={{display:"flex",flexDirection:"column"}}>
                <NavLink className="navbarstyle home" to='homelayout'>Home</NavLink>
                <NavLink to='search' className="navbarstyle search" >Search</NavLink>
                <NavLink to='askai' className="navbarstyle askai">ASK AI </NavLink>
                <NavLink to='profilelayout' className="navbarstyle profile" >Profile</NavLink>
                <NavLink to='setting' className="navbarstyle setting" ><IoIosSettings /> Setting</NavLink>
            </div>

         </div>
        </>
    )
}
export default Sidebar;
