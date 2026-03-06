

import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";




const ViewEmployeeDetails = () => {
          const navigate=  useNavigate()
      const {employeeId}=  useParams()
          
    console.log(employeeId)
   const {   ViewSingleEmployee,  viewEmployee}= useContext(AppContext)

      useEffect(()=>{
            ViewSingleEmployee(employeeId)
      }, [employeeId])
  // demo data (sirf UI ke liye)

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-24 px-4">

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg">

        {/* Header */}
        <div className="bg-blue-600 text-white px-8 py-5 rounded-t-xl">
          <h2 className="text-2xl font-semibold">Employee Details</h2>
          <p className="text-sm opacity-80">
            Complete employee information
          </p>
        </div>

        {/* Body */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-medium text-lg">{viewEmployee?.name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium text-lg">{ viewEmployee?.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-medium text-lg">{ viewEmployee?.phone}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Department</p>
            <p className="font-medium text-lg">{ viewEmployee?.department}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Position</p>
            <p className="font-medium text-lg">{ viewEmployee?.position}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Role</p>
            <p className="font-medium text-lg capitalize">{ viewEmployee?.roll}</p>
          </div>

              <div>
            <p className="text-gray-500 text-sm">Salary</p>
            <p className="font-medium text-lg capitalize">{ viewEmployee?.salary}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
             viewEmployee?.isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
              {viewEmployee?.isActive ? "Active" : "Inactive"}
            </span>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Address</p>
            <p className="font-medium text-lg">{ viewEmployee?.address}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Created At</p>
            <p className="font-medium">{  new Date(viewEmployee?.createdAt).toLocaleDateString("en-In",{
                day:"2-digit",
                month:"long",
                 year:"numeric"
            })}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Updated At</p>
            <p className="font-medium">{new Date( viewEmployee?.updatedAt).toLocaleDateString("en-In",{
                day:"2-digit",
                month:"long",
                year:'numeric'
            })}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <button 
            onClick={()=>navigate("/admin/employeeList")}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
            Back
          </button>
        </div>

      </div>

    </div>
  );
};

export default ViewEmployeeDetails;