import { Outlet } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import legallogo from './assets/legallogo.png'
import Login from './pages/login'
import Account from './pages/account'
import Home from './pages/home'
import Sidebar from './component/sidebar'
import Search from './pages/Search'
import Askai from './pages/askai'
import Setting from './pages/setting'
import Quickstats from './component/Quickstats'
import Review from './component/Review'
import Contactinfo from './component/ContactInfo'
import Achievements from './component/Achievements'
import Casehistory from './component/CaseHistory'
import Profilelayout from './component/profilelayout'
import Homelayout from './component/homelayout'
import Clientdetail from './component/clientdetail'
import Caseshistory from './component/caseshistory'
import Document from './component/document'
import Message from './component/message'
import Status from './component/Status'
import Casefiled from './component/casefiled'
import Inprogress from './component/inprogress'
import Scheduled from './component/Scheduled'
import Judgement from './component/Judgement'
import Closed from './component/Closed'
import Accountsection from './component/Accountsection'
function App() {



  const Layout=()=>{
      return (

        

        <div style={{display:"flex",flexDirection:"row"}}>
         
          <div style={{height:"80vh",width:"70px",borderRadius:"30px",border:"1px solid #F7F7F7",backgroundColor:"#F7F7F7",position:"fixed",marginTop:"85px"}}>
            <Sidebar/>
          </div>
          <div style={{height:"100vh",marginLeft:'180px',width:"1100px",marginTop:"45px",borderRadius:"25px"}}>
            <Outlet/>
          </div>
        </div>
      );
  }

    
 
  return (
    <> 
       <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Landing/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/account' element={<Account/>}/>
                  <Route path='/home' element={<Layout/>}>



                     <Route path='homelayout' element={<Homelayout/>}>
                          <Route index element={<Clientdetail/>}/>
                          <Route path='caseshistory' element={<Caseshistory/>}/>
                          <Route path='document' element={<Document/>}/>
                          <Route path='message' element={<Message/>}/>
                          <Route path='status' element={<Status/>}>
                             <Route path='casefiled' element={<Casefiled/>}/>
                             <Route path='inprogress' element={<Inprogress/>}/>
                             <Route path='judgement' element={<Judgement/>}/>
                             <Route path='scheduled' element={<Scheduled/>}/>
                             <Route path='closed' element={<Closed/>}/>
                          </Route>
                     </Route>

                     
                     <Route path='search' element={<Search/>}/>
                     <Route path='askai' element={<Askai/>}/>
                     <Route path='profilelayout' element={<Profilelayout/>}>
                        <Route index element={<Quickstats/>}/>
                        <Route path='review' element={<Review/>}/>
                        <Route path='casehistory' element={<Casehistory/>}/>
                        <Route path='contactinfo' element={<Contactinfo/>}/>
                        <Route path='achievements' element={<Achievements/>}/>
                     </Route>
                     <Route path='setting' element={<Setting/>}>
                        <Route index  element={<Accountsection/>}/>
                     </Route>
                  </Route>
              </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
