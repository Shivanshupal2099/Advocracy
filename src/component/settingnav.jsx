import { NavLink, Outlet } from "react-router-dom";
import Accountsection from "./Accountsection";

function Settingnav()
{
    return(
        <>
         <style>
            {
                `
                  .sidebar {
                    min-height: 100vh;
                    width: 310px;
                    border-radius: 30px;
                    border: 1px solid #F7F7F7;
                    background-color: #F5F5F5;
                    padding: 20px;
                    box-sizing: border-box;
                  }
                  .nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 150px;
                  }
                  .navblock {
                    padding: 15px 20px;
                    background-color: black;
                    color: white;
                    text-decoration: none;
                    border-radius: 10px;
                    transition: background-color 0.3s ease;
                    text-align: center;
                    font-weight: 500;
                  }
                  .navblock:hover {
                    background-color: white;
                       color: black;
                  }
                  .navblock.active {
                    background-color: black;
                    border:0px solid white;
                  }
                     .navblock.active:hover
                     {
                        background-color: white;
                        color: black;
                     }
                  .content {
                    flex: 1;
                    padding: 20px;
                    background-color: #ffffff;
                  }
                  @media (max-width: 768px) {
                    .sidebar {
                      width: 100%;
                      min-height: auto;
                    }
                    .nav-links {
                      flex-direction: row;
                      flex-wrap: wrap;
                      margin-top: 20px;
                    }
                    .navblock {
                      flex: 1 1 45%;
                    }
                  }
                `
            }
         </style>
         <div style={{display: "flex", flexDirection: "row", minHeight: "100vh"}}>
             <div className="sidebar">
                 <div className="nav-links">
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to=''>Account</NavLink>
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to='securityandprivacy'>Security and privacy</NavLink>
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to='notification'>Notification</NavLink>
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to='languageandaccessibility'>Language & Accessibility</NavLink>
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to='paymentandbilling'>Payment & Billing</NavLink>
                 </div>
             </div>
             <div className="content">
                 <Outlet/>
             </div>
         </div>
        </>
    );
}

export default Settingnav;