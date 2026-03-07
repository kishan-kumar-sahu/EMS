




import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useEffect } from "react";

const Attendance = () => {

  const { CheckInattendance, CheckOutAttendance, GetAllAttendances, allAttendance } =
    useContext(AppContext);

  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("employeeToken");

    if (token) {
      GetAllAttendances();
    }
  }, []);

  // Check In
  const handleCheckIn = async () => {
    const time = new Date().toLocaleTimeString();
    setCheckInTime(time);

    await CheckInattendance(checkInTime);
    await GetAllAttendances();
  };

  // Check Out
  const handleCheckOut = async () => {
    const time = new Date().toLocaleTimeString();
    setCheckOutTime(time);

    await CheckOutAttendance(checkOutTime);
    await GetAllAttendances();
  };

  const calculateTotalTime = (InTime, OutTimet) => {
    if (!InTime || !OutTimet) return "--";

    const start = new Date(InTime);
    const end = new Date(OutTimet);

    const diff = end - start;

    const totalSeconds = Math.floor(diff / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 md:p-6">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Attendance
        </h1>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 max-w-4xl mx-auto">

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">

            <button
              onClick={handleCheckIn}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Check In
            </button>

            <button
              onClick={handleCheckOut}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Check Out
            </button>

          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 rounded-lg p-4 md:p-6">

            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
              Today Summary
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">

              {/* Date */}
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Date</p>
                <p className="font-bold text-lg">
                  {new Date().toLocaleDateString()}
                </p>
              </div>

              {/* Check In */}
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Check In</p>
                <p className="font-bold text-green-600 text-lg">
                  {checkInTime || "--:--"}
                </p>
              </div>

              {/* Check Out */}
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Check Out</p>
                <p className="font-bold text-red-600 text-lg">
                  {checkOutTime || "--:--"}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Today Attendance Cards */}
        <div className="mt-10 max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-100">

            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Today Attendance
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-around">

              {/* Check In */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center shadow hover:shadow-xl transition">
                <div className="text-3xl mb-3">⏰</div>
                <p className="text-gray-500">Check In</p>

                <h3 className="text-xl md:text-2xl font-bold text-green-600 mt-2">
                  {checkInTime}
                </h3>
              </div>

              {/* Check Out */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center shadow hover:shadow-xl transition">
                <div className="text-3xl mb-3">🚪</div>
                <p className="text-gray-500">Check Out</p>

                <h3 className="text-xl md:text-2xl font-bold text-red-600 mt-2">
                  {checkOutTime}
                </h3>
              </div>

            </div>

          </div>
        </div>

        {/* Attendance History */}
        <div className="mt-10 max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-4 md:p-8 border border-gray-100">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Attendance History
          </h2>

          <div className="overflow-x-auto">

            {/* Table Header */}
            <div className="grid grid-cols-5 bg-gray-100 rounded-xl p-4 font-semibold text-gray-600 text-center min-w-[600px]">
              <p>Date</p>
              <p>Check In</p>
              <p>Check Out</p>
              <p>Total Time</p>
              <p>Status</p>
            </div>

            {/* Rows */}
            <div className="space-y-4 mt-4 min-w-[600px]">

              {allAttendance?.map((data) => (
                <div
                  key={data._id}
                  className="grid grid-cols-5 items-center text-center bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
                >

                  <p className="font-medium text-gray-700">
                    {new Date(data.date).toLocaleDateString("en-In", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-green-600 font-semibold">
                    {new Date(data.checkIn).toLocaleTimeString()}
                  </p>

                  <p className="text-red-600 font-semibold">
                    {data.checkOut ? (
                      new Date(data.checkOut).toLocaleTimeString()
                    ) : (
                      "--:--"
                    )}
                  </p>

                  <p className="text-yellow-600 font-bold">
                    {calculateTotalTime(data.checkIn, data.checkOut)}
                  </p>

                  <span className="mx-auto px-4 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                    {data.status}
                  </span>

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Attendance;