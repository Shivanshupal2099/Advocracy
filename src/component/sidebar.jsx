import { NavLink } from "react-router-dom";
import advocracy from '../assets/advocracy-logo.png'
import { IoIosSettings } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

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
                margin-top:20px;
                border-radius:50px;
                text-decoration:none;
                height:35px;
                width:200px;
                border:2px solid #ffffffff;
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
                   transform: scale(1.1);
                   background-color: #4144ffff;
                   color:white;
                    border:2px solid #4144ffff;
                }

            .navbarstyle.active {
             border-radius:50px;
                background-color: #4144ffff;
                color:white;
                font-weight: 700;
                border:2px solid #4144ffff;
            }

            .setting{

            margin-top:60px;
            border-radius:50px;
            background-color: #000000ff;
            color:white;

            }
            .icon{
                  height:30px;
                  width:30px;
                  margin-right:30px;
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
                <NavLink className="navbarstyle home" to='homelayout'><TiHome className="icon"/> Home</NavLink>
                <NavLink to='search' className="navbarstyle search" > <FaSearch className="icon"/>Search</NavLink>
                <NavLink to='askai' className="navbarstyle askai"> <FaBrain className="icon"/> NyaySetu </NavLink>
                <NavLink to='profilelayout' className="navbarstyle profile" > <CgProfile className="icon"/> Profile</NavLink>
                <NavLink to='setting' className="navbarstyle setting" ><IoIosSettings /> Setting</NavLink>
            </div>

         </div>
        </>
    )
}
export default Sidebar;
