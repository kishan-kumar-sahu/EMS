import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";
import { useEffect } from "react";
import { useState } from "react";

const Leave = () => {

    const {Leave  , getAllLeave,  setAllLeave}= useContext(AppContext)
    const navigate=useNavigate()
   
    

 
useEffect(() => {
  const token = localStorage.getItem("employeeToken");

  if (token) {
    getAllLeave();
  } else{
     setAllLeave([]);
  }

}, []);



  

//  console.log(Leave)
 

  const statusColors = {
    approved: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    rejected: "bg-red-100 text-red-800",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Leaves</h1>
          <button
            onClick={()=>navigate("/createLeave")}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Apply Leave
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">From</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">To</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Total Days</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Leave?.map((leave, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{leave?.leaveType}

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800"><td className="px-6 py-4 whitespace-nowrap text-gray-800">{new Date(leave?.fromDate).toLocaleDateString("en-In",{

                    day:"2-digit",
                    month:"short",
                     year:"numeric"
                  })}</td></td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{new Date(leave?.toDate).toLocaleDateString("en-In",{
                    day:"2-digit",
                    month:"short",
                     year:"numeric"
                  })}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{leave?.totalDays}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColors[leave?.status]}`}>
                      {leave.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                    onClick={()=>navigate(`/view/${leave?._id}`)}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leave;