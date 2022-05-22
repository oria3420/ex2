
import './App.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import useAuth from './hooks/useAuth';

export const USER_STATUSES = {
  LOGGED_IN:"LoggedIn",
  GUEST: "guest"
}

export const UserContext = React.createContext();
function App() {
  const {userStatus, setUserStatus, setUser, user} = useAuth()
  useEffect(() => {
    if(userStatus === USER_STATUSES.GUEST)
      if(window.location.href.includes('Chat')){
        window.location.replace('/')
      }
  }, [])
  return (
    <BrowserRouter>
    <UserContext.Provider value={user}>
      <Routes>
       {userStatus === USER_STATUSES.LOGGED_IN &&(
         <Route path='/Chat' element={<Chat user={user}/>}/> )}
        <Route path='/' element={<Login setUserStatus={setUserStatus} setUser={setUser} />}/>
        <Route path='/Register' element={<Register setUserStatus={setUserStatus} setUser={setUser} />}/>
        {/* <Route path='*' element={<div>NOT FOUND</div>}/> */}
      </Routes>
    </UserContext.Provider>
  </BrowserRouter>
  )}


export default App;
