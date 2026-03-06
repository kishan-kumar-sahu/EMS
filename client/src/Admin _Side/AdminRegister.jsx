// import React from "react";
// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AppContext from "../Context/AppContext";
// import { useState } from "react";

// const AdminRegister = () => {

 
//      const navigate=  useNavigate()

//   const {AdminRegister}= useContext(AppContext)

  
//    const [name, setName] = useState("")
//      const [email, setEmail]= useState("")
//        const [password, setPassword]= useState("")



//    const handlerSubmitButton= async(e)=>{
//            e.preventDefault()

//        const success=  await AdminRegister(name, email, password)
//             // console.log(name, email, password)      
//               if(success){
//                   navigate("/admin/logon")
//               }
         
//    }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-brpx-4  mt-11">

//       {/* Register Card */}
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">
//             Admin Register
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Create your admin account
//           </p>
//         </div>

//         {/* Form */}
//         <form className="space-y-5"  onSubmit={handlerSubmitButton}>

//           {/* Name */}
//           <div>
//             <label className="block text-gray-600 mb-1">
//               Full Name
//             </label>
//             <input

//               type="text"
//                 required

//                 onChange={(e)=>setName(e.target.value)}
//                  value={name}
//               placeholder="Enter your name"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-600 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter email"
//                   required

//                    onChange={(e)=>setEmail(e.target.value)}
//                     value={email}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//                   required
//                     onChange={(e)=> setPassword(e.target.value)}
//                     value={password}
//               placeholder="Enter password"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

         

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Register
//           </button>

//         </form>

//         {/* Login Link */}
//         {/* <p className="text-center text-gray-500 text-sm mt-6">
//           Already have an account?{" "}
//           <Link
//             to="/admin/login"
//             className="text-indigo-600 font-medium hover:underline"
//           >
//             Login
//           </Link>
//         </p> */}

//       </div>
//     </div>
//   );
// };

// export default AdminRegister;