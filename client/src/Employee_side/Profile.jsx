import React from "react";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

      const navigate=  useNavigate()

  const { profile, userProfile } = useContext(AppContext);

  useEffect(() => {
    userProfile();
  }, []);

  console.log("user profile ", profile);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* ===== Profile Header ===== */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {profile?.name}
              </h2>

              <p className="text-sm text-gray-500">
                ID : {profile?._id}
              </p>

              <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-lg">
                {profile?.position}
              </span>
            </div>
          </div>

          <div className="mt-5 md:mt-0">
            <button 
               onClick={()=>navigate("/editprofile")}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm">
              Edit Profile
            </button>
          </div>
        </div>

        {/* ===== Personal Information ===== */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">

          <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-3">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="mt-1 font-semibold text-gray-800">
                {profile?.name || "-"}
              </p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="mt-1 font-semibold text-gray-800">
                {profile?.email || "-"}
              </p>
            </div>

            {/* Role */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Role</p>
              <p className="mt-1 font-semibold text-gray-800">
                {profile?.position || "-"}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="mt-1 font-semibold text-gray-800">
                {profile?.phone || "-"}
              </p>
            </div>

            {/* Department */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Department</p>
              <p className="mt-1 font-semibold text-gray-800">
                {profile?.department || "-"}
              </p>
            </div>

            {/* Joining Date */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Joining Date</p>
              <p className="mt-1 font-semibold text-gray-800">
                {new Date(profile?.createdAt).toLocaleDateString("en-In", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* Status */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 md:col-span-2">
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="mt-1 font-semibold text-green-600">
               {profile?.isActive ? "Active" : "Inactive"}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;