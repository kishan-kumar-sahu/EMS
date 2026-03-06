import React from "react";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useEffect } from "react";

const AttendanceManagement = () => {


      const { allAttendancesAdmin  ,  ALlAttencdances  }= useContext(AppContext)
    
          //  console.log("allAttendancesAdmin", allAttendancesAdmin)

     useEffect(()=>{
       ALlAttencdances()
     },[])


  const statusStyle = (status) => {
    if (status === "present")
      return "bg-green-100 text-green-700";
    if (status === "working")
      return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Attendance Management
      </h1>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="min-w-full text-sm text-left">

          {/* Table Head */}
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Check In</th>
              <th className="px-6 py-4">Check Out</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {allAttendancesAdmin?.map((att) => (
              <tr
                key={att.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
   

                         
                          
                  {att?.employeeId?.name}
                </td>

                <td className="px-6 py-4">{new Date(att?.date).toLocaleDateString("en-In",{day:"2-digit", month:"long", year:"numeric"})}</td>

                <td className="px-6 py-4">{ new Date(att?.checkIn).toLocaleTimeString()}</td>

                <td className="px-6 py-4">{new Date(att?.checkOut).toLocaleTimeString()}</td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                      att?.status
                    )}`}
                  >
                    {att?.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default AttendanceManagement;