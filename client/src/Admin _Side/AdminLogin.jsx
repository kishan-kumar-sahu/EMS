// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {  User, Lock } from "lucide-react";
// import { useContext } from "react";
// import AppContext from "../Context/AppContext";

// const AdminLogin = () => {

//     const navigate=useNavigate()
  

//     const{ AdminLogin}= useContext(AppContext)
//     const [email, setEmail]= useState("")
//      const [password, setPassword]= useState("")




//    const handlerSubmitButton=async(e)=>{
//         e.preventDefault()

//           //  console.log(email, password)
//              const success=   await  AdminLogin(email,password)

//                if(success){
//                   navigate("/admin/dashboard")
//                }
//    }




//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 mt-7">

//       {/* Login Card */}
//       <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-md p-8">

//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">
//             Admin Panel
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Sign in to continue
//           </p>
//         </div>

//         {/* Form */}
//         <form  className="space-y-5"  onSubmit={handlerSubmitButton}>

//           {/* Email */}
//           <div className="relative">
//             <User className="absolute top-3 left-3 text-gray-400" size={20} />
//             <input
//               type="email"
//                 onChange={(e)=> setEmail(e.target.value)}
//               placeholder="Admin Email"
//               required
//               className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <Lock className="absolute top-3 left-3 text-gray-400" size={20} />

//             <input
            
//               placeholder="Password"
//                onChange={(e)=>setPassword(e.target.value)}
//               required
//               className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             />

//             <button
//               type="button"
            
//               className="absolute right-3 top-3 text-gray-500"
//             >
             
//             </button>
//           </div>

//           {/* Remember + Forgot */}
//           <div className="flex justify-between text-sm">
           

//             <Link
//               // to="/forgot-password"
//               className="text-indigo-600 hover:underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex justify-center items-center"
//           >
//               submit
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-gray-600 mt-2">
          
//           Don't have an account? <span
//             onClick={()=>navigate("/admin/register")}
//           className="text-blue-600 font-semibold hover:underline  cursor-pointer">Register</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;