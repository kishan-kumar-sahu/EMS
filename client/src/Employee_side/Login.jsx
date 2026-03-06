import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";

const Login = () => {
  
   const { UserAndAdminLogin}= useContext(AppContext)

        const navigate= useNavigate()


   const [email, setEmail]= useState("")
     const [password, setPassword]= useState("")

   const handlerSubmitbutton=async(e)=>{
           e.preventDefault()



    const    role= await  UserAndAdminLogin(email, password)
         
          if (role === "admin") {
    navigate("/admin/dashboard");
  } else if (role === "employee") {
    navigate("/userDashboard");
  }
       
               
             
   }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Login </h2>
          <p className="mt-2 text-gray-500">Enter your credentials to access your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handlerSubmitbutton}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"

               onChange={(e)=> setEmail(e.target.value)}
                value={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
                onChange={(e)=>setPassword(e.target.value)}
                 value={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-blue-600">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-600">
          
          Don't have an account? <span
             onClick={()=>navigate("/register")}
          className="text-blue-600 font-semibold hover:underline  cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;