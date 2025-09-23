import { NavLink } from 'react-router-dom';

function Profilenav()
{
    return(
        <>
           <style>
            {
                `
                *{
                margin:0;
                padding:0;

                }
                .profilenavbar{
                 margin-top:100px;
                 margin-left:100px;
                
                }
                 .quickstats{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                 .quickstats.active{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                    .Achievements{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                 .Achievements.active{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                    .Review{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                 .Review.active{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                    .casehistory{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                 .casehistory.active{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                    .contactinfo{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }
                 .contactinfo.active{
                    border:2px solid black;
                    height:40px;
                    width:140px;
                    padding:10px;
                    margin-left:50px;
                    background-color:black;
                    color:white;
                    border-radius:30px;
                    text-decoration:none;

                 }

                 
                `
            }
           </style>
            <div className="profilenavbar">
                          <NavLink className={({ isActive }) => isActive ? 'quickstats active' : 'quickstats'} to=''>Quick Stats</NavLink>
                          <NavLink className={({ isActive }) => isActive ? 'Achievements active' : 'Achievements'} to='achievements'>Achievements</NavLink>
                          <NavLink className={({ isActive }) => isActive ? 'Review active' : 'Review'} to='review'>Review</NavLink>
                          <NavLink className={({ isActive }) => isActive ? 'casehistory active' : 'casehistory'} to='casehistory'>Case History</NavLink>
                          <NavLink className={({ isActive }) => isActive ? 'contactinfo active' : 'contactinfo'} to='contactinfo'>Contact Info</NavLink>
            </div>
        </>
    )
}

export default Profilenav;