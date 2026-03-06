

import { useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";



 

const DashBoard = () => {


 const {Leave,  getAllLeave}=useContext(AppContext)
 
  const navigate = useNavigate();

   
      useEffect(()=>{
        const token= localStorage.getItem("employeeToken")
        if(token){
      getAllLeave()
           }
            
      },[])

      console.log("leave", Leave)



  return (
    <div className="min-h-screen bg-gray-100 p-6">

      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Employee Dashboard
        </h1>
       
      </div>

      {/*  states cards  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-10">

        <StatCard
          title="Total Leaves"
          value={Leave?.length}
          icon={<CalendarDays size={26} />}
          color="from-blue-500 to-blue-600"
        />

        <StatCard
          title="Approved"
       value={Leave?.filter(
  (leave) => leave.status === "approved"
).length}
          icon={<CheckCircle size={26} />}
          color="from-green-500 to-green-600"
        />

        <StatCard
          title="Pending"
          value={Leave?.filter((leave)=>leave.status==="pending").length}
          icon={<Clock size={26} />}
          color="from-yellow-500 to-yellow-600"
        />

        <StatCard
          title="Rejected"
          value={Leave?.filter((leave)=>leave.status==="rejected").length}
          icon={<XCircle size={26} />}
          color="from-red-500 to-red-600"
        />

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ActionCard
            title="Apply Leave"
            desc="Create new leave request quickly."
            button="Apply Now"
            onClick={() => navigate("/createLeave")}
          />

          <ActionCard
            title="My Leaves"
            desc="Check your leave history & status."
            button="View Leaves"
            onClick={() => navigate("/leave")}
          />

          <ActionCard
            title="Attendance"
            desc="Track daily check-in & check-out."
            button="Open"
            onClick={() => navigate("/attendance")}
          />

        </div>
      </div>

    </div>
  );
};



const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className={`bg-gradient-to-r ${color} text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="opacity-80">{title}</p>
          <h2 className="text-3xl font-bold">{value}</h2>
        </div>

        <div className="bg-white/20 p-3 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
};


/* ===== ACTION CARD ===== */
const ActionCard = ({ title, desc, button, onClick }) => {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition bg-gray-50">

      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2 mb-4">
        {desc}
      </p>

      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {button}
      </button>

    </div>
  );
};

export default DashBoard;