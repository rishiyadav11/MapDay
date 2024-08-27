import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Routes_routing from './routes/Routing'
import axios from 'axios';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstletter, setFirstletter] = useState(null);
  const [bgcolor, setBgcolor] = useState(null);
  const [name, setname] = useState(null)
  const [datas, setdata] = useState({})

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('https://mapday-backend.onrender.com/api/auth/islogin',{ withCredentials: true });
        // console.log(response.data)

      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
        setdata(response.data)
        const getFl = response.data.name.split("")[0];
        // console.log(getFl);
        setname(response.data.name)
        setFirstletter(getFl);
        setBgcolor(response.data.bgcolor);
      }
       else {
        setIsAuthenticated(false);
        setFirstletter(null);
        setBgcolor(null);
      }
    } catch (error) {
      console.error('Error checking authentication status:', error);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);




  const handleLogout = async () => {
    try {
      await axios.post('https://mapday-backend.onrender.com/api/auth/logout', {}, { withCredentials: true });
      setIsAuthenticated(false);
      setFirstletter(null);
      setBgcolor(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div className='overflow-x-hidden w-full min-h-screen bg-gray-600 text-white'>
           <Navbar isAuthenticated={isAuthenticated} firstletter={firstletter} bgcolor={bgcolor} name={name}/>
      <Routes_routing checkAuthStatus={checkAuthStatus} data={datas} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
    </div>
  )
}

export default App