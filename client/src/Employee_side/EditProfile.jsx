import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";
import { useState } from "react";
import { useEffect } from "react";

const EditProfile = () => {
    const navigate= useNavigate()
   const { profile, userProfile ,  userProfileUpadte}= useContext(AppContext)



  const [name, setName]=useState("")
    const [email, setEmail]= useState("")
  const [phone, setPhone]=useState("")
  const [department, setDepartment]=useState("")
  const [ position, setPosition]=useState("")
  const [address, setAddrsss]=useState("")
   

     useEffect(()=>{
      userProfile()
        
},[])
     
         useEffect(()=>{

              if(profile){
         setName(profile.name|| "")  
           setEmail(profile.email|| "")
             setPhone(profile.phone|| "")
           setDepartment(profile.department ||"")
           setPosition(profile.position||"")
           setAddrsss(profile.address||"")
              }
              
    
 
      },[profile])


     const handlesubmitButton= async(e)=>{
        e.preventDefault()
     
     
       const  success= await  userProfileUpadte(name, email, phone, department, position, address)

          if(success){
               navigate("/profile")
          }
     }

return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">

    <div className="max-w-4xl mx-auto">

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b bg-gray-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Edit Profile
            </h2>
            <p className="text-sm text-gray-500">
              Update your personal information
            </p>
          </div>

          <Link
            to="/profile"
            className="px-4 py-2 text-sm bg-white border rounded-lg hover:bg-gray-100 transition"
          >
            Back
          </Link>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-7 p-8"   onSubmit={handlesubmitButton}>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              onChange={(e)=>setName(e.target.value)}
              value={name}
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              bg-gray-50 focus:bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all shadow-sm hover:shadow-md"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              placeholder="Enter email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              bg-gray-50 focus:bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all shadow-sm hover:shadow-md"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="text"
              onChange={(e)=>setPhone(e.target.value)}
              value={phone}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              bg-gray-50 focus:bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Department */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Department
            </label>
            <input
              type="text"
              onChange={(e)=>setDepartment(e.target.value)}
              value={department}
              placeholder="Department"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              bg-gray-50 focus:bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Position */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Role / Position
            </label>
            <input
              type="text"
              onChange={(e)=>setPosition(e.target.value)}
              value={position}
              placeholder="Position"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              bg-gray-50 focus:bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              onChange={(e)=>setAddrsss(e.target.value)}
              value={address}
              placeholder="Address"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              bg-gray-50 focus:bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 pt-6 border-t">

            <button
              type="button"
              onClick={()=>navigate("/profile")}
              className="px-6 py-2 border border-gray-300 rounded-lg
              text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-7 py-2 bg-blue-600 text-white rounded-lg
              hover:bg-blue-700 active:scale-95 transition shadow-md"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  </div>
);
};

export default EditProfile;