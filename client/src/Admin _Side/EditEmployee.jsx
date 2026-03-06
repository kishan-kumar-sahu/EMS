import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import App from "../App";
import AppContext from "../Context/AppContext";
import { useState } from "react";
import { useEffect } from "react";

const EditEmployee = () => {

const { employeeId}  = useParams()

      const navigate=  useNavigate()

 const{ UpdatedEmployee , updateEmployee ,   ViewSingleEmployee,  viewEmployee} = useContext(AppContext)

              //  console.log("updateEmployeejjjjjj", updateEmployee)


           const [name, setName] = useState("")
            const [email, setEmail]= useState("")

             const [phone , setPhone]= useState("")
               const[department, setDepartment]= useState("")
             const[position, setPosition]= useState("")
             const[salary, setSalary]= useState("")
             const[address, setAddress]= useState("")
             
   useEffect(() => {
   if (employeeId) {
    // UpdatedEmployee(employeeId);

     ViewSingleEmployee(employeeId)
   }
   },[employeeId])


     useEffect(() => {
  if (viewEmployee) {
    setName(viewEmployee?.name || "");
    setEmail(viewEmployee?.email || "");
    setPhone(viewEmployee?.phone || "");
    setDepartment(viewEmployee?.department || "");
    setPosition(viewEmployee?.position || "");
    setSalary(viewEmployee?.salary || "");
    setAddress(viewEmployee?.address || "");
  }
}, [viewEmployee]);


    const  handlerSubmitButton= async(e)=>{
             e.preventDefault()


   const success= await  UpdatedEmployee(employeeId , name, email, phone, department, position, salary, address);
          
           if(success){
           navigate("/admin/employeeList ")
           }

    }



 

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-24 px-4">

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl">

        {/* Header */}
        <div className="bg-blue-600 text-white px-8 py-5 rounded-t-xl">
          <h2 className="text-2xl font-semibold">Edit Employee</h2>
          <p className="text-sm opacity-80">
            Update employee information
          </p>
        </div>

        {/* Form */}
        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"   onSubmit={handlerSubmitButton}>

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              onChange={(e)=> setName(e.target.value)}
                value={name}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              onChange={(e)=> setEmail(e.target.value)}
               value={email}
              type="email"
           
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone
            </label>
            <input
              type="text"
               onChange={(e)=>setPhone(e.target.value)}
                 value={phone}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Department
            </label>
            <input
              type="text"
                onChange={(e)=> setDepartment(e.target.value)}
                  value={department}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Position
            </label>
            <input
              type="text"
                onChange={(e)=> setPosition(e.target.value)}
                 value={position}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
             {/* salary */}
                <div>
            <label className="block text-sm text-gray-600 mb-1">
            Salary
            </label>
            <input
              type="text"
                onChange={(e)=> setSalary(e.target.value)}
                 value={salary}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">
              Address
            </label>
            <textarea
                  onChange={(e)=> setAddress(e.target.value)}
                     value={address}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
                   onClick={()=>navigate("/admin/employeeList")}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Update Employee
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditEmployee;