import Landing from "./component/landing"
import {BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom'
import Login from "./component/login"
import Account from "./component/Account"
import Home from "./component/Home"
import Search from "./component/search"
import Profile from "./component/profile"
import Sidebar from "./component/sidebar"
import Quickstats from "./component/Quickstats"
import Achivements from "./component/Achievements"
import CaseHistory from "./component/CaseHistory"
import Reviews from "./component/Reviews"
import ContactInfo from "./component/ContactInfo"
import Client from "./component/client"

import Detail from "./component/clientinfo/detail"
import CaseHistorys from "./component/clientinfo/casehistorys"
import Document from "./component/clientinfo/document"
import Message from "./component/clientinfo/message"
import Status from "./component/clientinfo/Status"


function Layout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
}

export function Clientlayout(){
  return(
    <>
            <div>
               <Client/>
            </div>

    </>
  );
}


function Profilelayout(){
  return(
    <>
         <div style={{display:"flex",flexDirection:"column"}}>
            <Profile/>
            <div style={{flex:1,overflow:"auto"}}>
              <Outlet/>
            </div>
          </div>
    </>
  );
}




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/home" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="client" element={<Clientlayout />}>
                   <Route index element={<Detail/>}/>
                   <Route path="casehistory" element={<CaseHistorys/>}/>
                   <Route path="document" element={<Document/>}/>
                   <Route path="message" element={<Message/>}/>
                   <Route path="status" element={<Status/>}/>
                </Route>
                <Route path="search" element={<Search />} />
                <Route path="profile" element={<Profilelayout />} >
                      <Route index element={<Quickstats/>}/>
                      <Route path="achievements" element={<Achivements/>}/>
                     
                      <Route path="casehistory" element={<CaseHistory/>}/>
                      <Route path="reviews" element={<Reviews/>}/>
                      <Route path="contactinfo" element={<ContactInfo/>}/>
                </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
