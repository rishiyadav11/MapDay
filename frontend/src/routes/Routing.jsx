
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
const Routing = ({ checkAuthStatus ,handleLogout,data, isAuthenticated}) => {
  return (
    <div>
    <Routes>
        <Route  path='/' element={<Home isAuthenticated={isAuthenticated}/>}/>
        <Route  path='/dashboard' element={<Dashboard/>}/>
        <Route  path='/login' element={<Login onLogin={checkAuthStatus}  />}/>
        <Route  path='/signup' element={<Signup onRegister={checkAuthStatus}/>}/>
        <Route  path='/profile' element={<Profile data={data} checkAuthStatus={checkAuthStatus} handleLogout={handleLogout}/>}/>
    </Routes>
</div>
  )
}

export default Routing