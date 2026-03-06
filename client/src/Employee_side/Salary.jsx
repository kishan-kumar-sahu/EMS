

import React, { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";

const Salary = () => {

  const { profile, userProfile } = useContext(AppContext);

  useEffect(() => {
userProfile()
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-[420px] rounded-2xl shadow-lg p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          💰 My Salary
        </h1>

        {/* Salary Card */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center shadow-md">

          <p className="text-lg opacity-90">
            Monthly Salary
          </p>

          <h2 className="text-4xl font-bold mt-2">
            ₹ {profile?.salary || 0}
          </h2>

        </div>

        {/* Info Section */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Salary will be credited at the end of the month.
        </div>

        {/* Extra Details */}
        <div className="mt-6 border-t pt-4 text-sm text-gray-600">

          <div className="flex justify-between mb-2">
            <span>Employee Name</span>
            <span className="font-medium">{profile?.name}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Department</span>
            <span className="font-medium">{profile?.department}</span>
          </div>

          <div className="flex justify-between">
            <span>Position</span>
            <span className="font-medium">{profile?.position}</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Salary;