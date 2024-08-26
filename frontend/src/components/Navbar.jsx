import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({isAuthenticated,bgcolor,firstletter,name}) => {
  return (
    <nav className='flex  justify-between sticky top-0 w-screen items-center px-8 bg-gray-900 h-20'>
        <NavLink to="/" className="text-2xl font-semibold cursor-pointer hover:text-teal-500 transition-all duration-200">MapDay</NavLink>
        <div className=" ">
            {
                isAuthenticated?(
                    <div className="flex items-center gap-4">
                                  <NavLink
              to="/dashboard"
              className="flex items-center justify-center px-3 h-12 hover:text-emerald-400 text-lg capitalize transition duration-300"
            >
             Dashboard
            </NavLink>
                         <NavLink to="/profile">
            <div
              className="flex justify-center cursor-pointer items-center w-10 h-10 rounded-full text-white text-xl"
              style={{ backgroundColor: bgcolor }}
            >
              {firstletter.toUpperCase()}
            </div>
          </NavLink>
                    </div>
                ):(
                    <div className="auth flex gap-2 items-center">
                    <NavLink
                      to="/login"
                      className="flex items-center justify-center w-20 h-12 text-black bg-gray-100 rounded-lg hover:bg-green-600 hover:text-white text-md transition duration-300"
                    >
                      Log in
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="flex items-center justify-center w-20 h-12 text-black bg-gray-100 rounded-lg hover:bg-green-600 hover:text-white text-md transition duration-300"
                    >
                      Sign up
                    </NavLink>
                  </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar