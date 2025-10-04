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
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 10px;
                    transition: background-color 0.3s ease;
                    text-align: center;
                    font-weight: 500;
                  }
                  .navblock:hover {
                    background-color: #0056b3;
                  }
                  .navblock.active {
                    background-color: #003d82;
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
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to=''>Security and privacy</NavLink>
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to=''>Notification</NavLink>
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to=''>Language & Accessibility</NavLink>
                     <NavLink className={({ isActive }) => isActive ? "navblock active" : "navblock"} to=''>Payment & Billing</NavLink>
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