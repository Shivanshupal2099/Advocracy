import './client.css'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Clientnav(){
    return (
        <>  
                   <div className="header" style={{display:'flex',flexDirection:'row'}}>

                    <NavLink to='' className='navstyle'> Details</NavLink>
                    <NavLink to='casehistory' className='navstyle'>Case History</NavLink>
                    <NavLink to='document' className='navstyle'>Document</NavLink>
                    <NavLink to='message' className='navstyle'>Message</NavLink>
                    <NavLink to='status' className='navstyle'>Status</NavLink>
                   </div>
                   <Outlet/>
                   
                   
          
        </>
    );
}

export default Clientnav;
