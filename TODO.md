<<<<<<< HEAD
# TODO: Fix Profile and Search Issues

- [x] Update sidebar.jsx: Change NavLinks for Search and Profile to relative paths 'search' and 'profile'
- [x] Update App.jsx: Remove the redundant <Route path="home" element={<Home/>}/>
- [x] Update profile.jsx: Remove the <Sidebar/> import and rendering to avoid duplication
- [ ] Test navigation to ensure /home/search and /home/profile work correctly
=======
- [x] Lift userdata state to Homelayout.jsx: Add useState for userdata, useEffect for localStorage, create ClientContext, provide deleteClient function.
- [x] Update Homesidebar.jsx: Remove local userdata state, receive userdata and setuserdata as props.
- [x] Update Clientdetail.jsx: Import useContext, ClientContext, add onClick to delete button to call deleteClient and navigate back.
>>>>>>> cdd7a3f1be430130f2abfe09cabdb0c242a10c4a
