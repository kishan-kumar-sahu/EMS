import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";

const AdminNavbar = () => {

  const navigate = useNavigate();
  const { isAdminLogin, AdminLogOut } = useContext(AppContext);

  const handleLogoutButton =  async () => {
       await AdminLogOut();
      navigate("/login")
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 border-b">

      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">

        {/* LEFT - Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide cursor-pointer">
          Admin Panel
        </h1>

        {/* CENTER - Menu */}
        <div className="flex items-center gap-2">

          <Link
            to="/admin/dashboard"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/employeeList"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Employees
          </Link>

          <Link
            to="/admin/allAttendance"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Attendance
          </Link>

          <Link   to="/admin/leaveRequest"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Leaves
          </Link>

        </div>

        {/* RIGHT - Buttons */}
        <div className="flex items-center gap-3">

         {
            isAdminLogin ?(<>  <button
            onClick={handleLogoutButton}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-sm hover:shadow-md transition-all duration-200"
          >
            Logout
          </button></>):(<>
          <button
            onClick={() => navigate("/admin/login")}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-sm hover:shadow-md transition-all duration-200"
          >
            Login
          </button></>)
   }

        


        </div>

      </div>

    </nav>
  );
};

export default AdminNavbar;