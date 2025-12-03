import '../component/sidebarcss.css';
import advocracy from '../assets/advocracy.png'
import { NavLink } from 'react-router-dom';

function Sidebar(){
    return (
        <div className='sidebarborder'>

            <div className='logo'>
                <img src={advocracy} alt="Advocracy Logo" />
            </div>

            <div className='navi'>
                <NavLink  to='' className='linkstyle'>Home</NavLink>
                <NavLink to='client' className={'linkstyle'}>Client</NavLink>
                <NavLink to='search' className='linkstyle'>Search</NavLink>
                <NavLink to='profile' className='linkstyle'>Profile</NavLink>
            </div>

        </div>
    );
}

export default Sidebar;
