import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';
const Navbar = () => {

      const navigate=  useNavigate()

      const {  isloggedIn, setLoggedIn,  logout}= useContext(AppContext)

    // const  handleLogoutButton=async()=>{
    //       localStorage.removeItem("employeeToken")
    //      setLoggedIn(false)
            
    //      navigate("/login")
         
        
    // }


    const  handleLogoutButton=async()=>{
            await  logout()
               navigate("/login")
    }

  return (
    <nav className="bg-white shadow-md sticky w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">EMS</span>
          </div>

          {/* Menu Links - Desktop */}
         
           <div className="hidden md:flex md:items-center space-x-6">
            <Link to="/userDashboard" href="#" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</Link>
            <Link to="/attendance" href="#" className="text-gray-700 hover:text-blue-600 font-medium">Attendance</Link>
            <Link to="/leave" href="#" className="text-gray-700 hover:text-blue-600 font-medium">Leaves</Link>
             <Link to="/salary" href="#" className="text-gray-700 hover:text-blue-600 font-medium">Salary</Link>

             
            {/* <Link to ="/profile"href="#" className="text-gray-700 hover:text-blue-600 font-medium">Profile</Link> */}
          </div>
         

          {/* Auth Buttons - Desktop */}
      
            <div className="hidden md:flex md:items-center space-x-4">
  {
    isloggedIn? (<>
       <Link to="/profile" className="px-4 py-2 bg-blue-600 text-white rounded 
     hover:bg-blue-700 transition inline-block">Profile
         </Link>
            <button
          onClick={ ()=>handleLogoutButton()}
       
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
              Logout
            </button>
    </>): (<>
      
          <button 
             onClick={()=>navigate("/login")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Login
            </button>
    </>)
  }

             

          </div>
      

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">Dashboard</a>
          <a href="#" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">Attendance</a>
          <a href="#" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">Leaves</a>
          <a href="#" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">Profile</a>
          <button className="w-full text-left px-3 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 transition">
            Login
          </button>
          <button className="w-full text-left px-3 py-2 rounded text-white bg-red-600 hover:bg-red-700 transition">
            Logout
          </button>




        </div>
      </div>
    </nav>
  );
};

export default Navbar;