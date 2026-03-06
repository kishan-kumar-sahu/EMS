import React from "react";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const navigate=  useNavigate()

     const { allEmployee,  AllEmployee,   allLeaveAdmin ,     UpdateLeaveAdmin,  AllLeave ,  allAttendancesAdmin ,  ALlAttencdances   }= useContext(AppContext)



 
      // console.log("allAttendancesAdmin", allAttendancesAdmin)
    useEffect(()=>{
      AllEmployee()
            AllLeave() 
       ALlAttencdances()

    },[])

   
  const statusStyle = (status) => {
    if (status === "Approved")
      return "bg-green-100 text-green-700";
    if (status === "Rejected")
      return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

      
  // ===== DUMMY SUMMARY DATA =====
  const summary = {
    employees: 45,
    present: 38,
    absent: 7,
    pendingLeaves: 5,
  };




  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* ================= HEADER ================= */}
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Employees</p>
          <h2 className="text-2xl font-bold">{ allEmployee?.length}</h2>
        </div>

        <div className="bg-green-100 p-5 rounded-xl shadow">
          <p className="text-green-700">Working Employee Today</p>
          <h2 className="text-2xl font-bold">{allAttendancesAdmin?.filter((data)=> data?.status==="working").length}</h2>
        </div>

        {/* <div className="bg-red-100 p-5 rounded-xl shadow">
          <p className="text-red-700">Pre Today</p>
          <h2 className="text-2xl font-bold">{summary.absent}</h2>
        </div> */}

        <div className="bg-yellow-100 p-5 rounded-xl shadow">
          <p className="text-yellow-700">Pending Leaves</p>
          <h2 className="text-2xl font-bold">{allLeaveAdmin?.filter((data)=>data?.status==="pending").length}</h2>

     
        </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">

         

          <button 
               onClick={()=>navigate("/admin/allAttendance") }
          className="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            View Attendance
          </button>

          <button
                 onClick={()=>navigate("/admin/leaveRequest") }
            className="px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
            Manage Leaves
          </button>

          {/* <button className="px-5 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            Reports
          </button> */}

        </div>
      </div>

      {/* ================= PENDING LEAVES ================= */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Pending Leave Requests
        </h2>

        {/* {allLeaveAdmin?.map((leave) => (
          <div
            key={leave.id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <p className="font-medium">{leave.employeeId.name}</p>
              <p className="text-sm text-gray-500">
                
              </p>
               <p>kkkkk</p>

            </div>

            <div className="space-x-2">
              <button className="px-3 py-1 bg-green-600 text-white rounded">
                Approve
              </button>
              <button className="px-3 py-1 bg-red-600 text-white rounded">
                Reject
              </button>
            </div>
          </div>
        ))} */}

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

                <td className="px-6 py-4">{new Date(leave.fromDate).toLocaleDateString("en-In",{day:"2-digit", month:"long",  year:"numeric"  })}</td>

                <td className="px-6 py-4">{ new Date(leave.toDate).toLocaleDateString("en-In",  {day:"2-digit", month:"long", year:"numeric"})}</td>

                     <td className="px-6 py-4">{leave.reason}</td>


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




    </div>
  );
};

export default AdminDashboard;