import React from "react";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useEffect } from "react";

const LeaveRequests = () => {

  const {  allLeaveAdmin, UpdateLeaveAdmin }= useContext(AppContext)

   
 


  const statusStyle = (status) => {
    if (status === "Approved")
      return "bg-green-100 text-green-700";
    if (status === "Rejected")
      return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Leave Requests
      </h1>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="min-w-full text-sm text-left">

          {/* Header */}
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Employee Name</th>
              <th className="px-6 py-4">Leave Type</th>
              <th className="px-6 py-4">From</th>
              <th className="px-6 py-4">To</th>
                 <th className="px-6 py-4">reason</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            { allLeaveAdmin?.map((leave) => (
              <tr
                key={leave?._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {leave?.employeeId?.name}
                </td>

                <td className="px-6 py-4">
                  {leave?.leaveType}
                </td>

                <td className="px-6 py-4">{new Date(leave?.fromDate).toLocaleDateString("en-In",{day:"2-digit", month:"long",  year:"numeric"  })}</td>

                <td className="px-6 py-4">{ new Date(leave?.toDate).toLocaleDateString("en-In",  {day:"2-digit", month:"long", year:"numeric"})}</td>

                     <td className="px-6 py-4">{leave?.reason}</td>


                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                      leave?.status
                    )}`}
                  >
                    {leave?.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 flex gap-2 justify-center">
                  <button
               
                
                    onClick={()=> UpdateLeaveAdmin(leave?._id , "approved")}      
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                    Approve
                  </button>

                  <button
                     onClick={()=> UpdateLeaveAdmin(leave?._id , "rejected")} 
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    Reject
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default LeaveRequests;