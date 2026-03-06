import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";

const Register = () => {

  const {UserRegister}= useContext(AppContext)
           const navigate= useNavigate()


     const [name, setName]= useState("")
        const [email, setEmail]= useState("")
          const [password, setPassword]= useState("")
        const [phone , setPhone]= useState("")
         const [department , setDepartment ]= useState("")
         const [position, setPosition]= useState("")
           const [address, setAddress]= useState("")


               
        const handlerSubmitButton= async(e)=>{
                 
             e.preventDefault()  
              
          const success=  await UserRegister(name, email, password, phone, department,  position,address )
                if(success){
                navigate("/login")
                }
                
            //  console.log(name, email, password)
        }



    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register to continue
        </p>

        {/* Form */}
        <form className="space-y-4"  onSubmit={handlerSubmitButton}  >

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
               
             onChange={(e)=>setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"

               onChange={(e)=> setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
               onChange={(e)=>setPassword(e.target.value)}
              placeholder="Create password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         {/* phone */}

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="text"
              onChange={(e)=>setPhone(e.target.value)}
               
              placeholder="Enter  phone"
              value={phone}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         <div>
            <label className="block text-sm font-medium text-gray-600">
             Department
            </label>
            <input
              type="text"
              onChange={(e)=>setDepartment(e.target.value)} 
              placeholder="Create Department"
               value={department}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

            <div>
            <label className="block text-sm font-medium text-gray-600">
             Position
            </label>
            <input
              type="text"
              
              placeholder="Create Position"
               onChange={(e)=>setPosition(e.target.value)}
                  value={position}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-600">
             Address
            </label>
            <input
              type="text"
               onChange={(e)=>setAddress(e.target.value)}
              placeholder="Create Address"
               value={address}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p 
        
        className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
           onClick={()=>navigate("/login")}
          className="text-blue-600 cursor-pointer hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default Register;