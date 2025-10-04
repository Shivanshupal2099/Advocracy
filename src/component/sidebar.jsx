import { NavLink } from "react-router-dom";
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
                height:55px;
                width:60px;
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
            
            `
            }
        </style>
         <div style={{position:"fixed"}} >
             
            <div style={{display:"flex",flexDirection:"column"}}>
                <NavLink className="navbarstyle home" to='homelayout'><TiHome size={40} /></NavLink>
                <NavLink to='search' className="navbarstyle search" > <FaSearch size={40} /> </NavLink>
                <NavLink to='askai' className="navbarstyle askai"> <FaBrain size={40} /> </NavLink>
                <NavLink to='profilelayout' className="navbarstyle profile" > <CgProfile size={40} /> </NavLink>
                <NavLink to='setting' className="navbarstyle setting" ><IoIosSettings size={40} /> </NavLink>
            </div>
         </div>
        </>
    )
}
export default Sidebar;
