import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../Context/AppContext";
import { useEffect } from "react";

const View = () => {

  const navigate = useNavigate()
      const {leaveId}=  useParams()

     const {getSingleLeaveById,  singleLeave}= useContext(AppContext)

             
       useEffect(()=>{
        getSingleLeaveById(leaveId)  
       },[leaveId])


  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Leave Details
          </h2>

          <button
            onClick={() => navigate("/leave")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Back
          </button>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">Leave Type</p>
            <p className="text-lg font-semibold">{singleLeave.leaveType}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Days</p>
            <p className="text-lg font-semibold">{singleLeave.totalDays}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">From Date</p>
            <p className="text-lg font-semibold">
              {formatDate(singleLeave.fromDate)}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">To Date</p>
            <p className="text-lg font-semibold">
              {formatDate(singleLeave.toDate)}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Applied On</p>
            <p className="text-lg font-semibold">
              {formatDate(singleLeave.createdAt)}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
              {singleLeave.status}
            </span>
          </div>

        </div>

        {/* Reason */}
        <div className="mt-6">
          <p className="text-gray-500 text-sm mb-1">Reason</p>
          <div className="bg-gray-50 border rounded-lg p-4 text-gray-700">
            {singleLeave.reason}
          </div>
        </div>

      </div>
    </div>
  );
};

export default View;