import { Outlet } from 'react-router-dom'
import Sidebar from '../component/sidebar'
function Home()
{
    const Layout=()=>{
        return (
          <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{height:"100vh",width:"290px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#F7F7F7",position:"fixed"}}>
              <Sidebar/>
            </div>
            <div style={{height:"100vh",marginLeft:'350px',width:"1100px",marginTop:"25px",borderRadius:"25px"}}>
              <Outlet/>
            </div>
          </div>
        );
    }

    return(
        <>
           <Layout/>
        </>
    )
}
export default Home;
