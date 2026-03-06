import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";
import { useContext } from "react";

const CreateLeave = () => {
     const navigate= useNavigate()

     const{ApplyLeave}=   useContext(AppContext)
             
               
               
       const [  leaveType, setLeaveType]= useState("")
           const [ totalDays, setTotalDays]= useState("")
             const [   fromDate,  setFromData]= useState("")
               const [toDate,setToDate]= useState("")
                 const [ reason, setReason]= useState("")
          
                 
    const  handlerSubmitButton= async(e)=>{

         e.preventDefault()

         


        //   console.log(leaveType, totalDays, fromDate, toDate,reason)
          const success=    await ApplyLeave(leaveType, totalDays, fromDate, toDate,reason)
             if(success){
         navigate("/leave")
         
             }
              

    }              


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Apply Leave
      </h1>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <form className="space-y-5"  onSubmit={ handlerSubmitButton}>

          {/* Leave Type */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Leave Type
            </label>
            <select
                onChange={(e)=>setLeaveType(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Leave Type</option>
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Work From Home</option>
              <option>Annual Leave</option>
          
            </select>
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* From Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                From Date
              </label>
              <input
                type="date"
                 onChange={(e)=>setFromData(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* To Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                To Date
              </label>
              <input
                type="date"
                  onChange={(e)=>setToDate(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* Total Days */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Total Days
            </label>
            <input
              type="number"
                onChange={(e)=>setTotalDays(e.target.value)}
              placeholder="Enter total leave days"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Reason
            </label>
            <textarea
              rows="4"
              placeholder="Write your reason..."
                onChange={(e)=>setReason(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
            onClick={()=>navigate("/leave")}
              type="button"
              className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Submit Leave
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateLeave;