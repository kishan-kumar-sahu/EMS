





import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";

const AdminNavbar = () => {

  const navigate = useNavigate();
  const { isAdminLogin, AdminLogOut } = useContext(AppContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutButton = async () => {
    await AdminLogOut();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-blue-600">
          Admin Panel
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">

          <Link
            to="/admin/dashboard"
            className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/employeeList"
            className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            Employees
          </Link>

          <Link
            to="/admin/allAttendance"
            className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            Attendance
          </Link>

          <Link
            to="/admin/leaveRequest"
            className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
          >
            Leaves
          </Link>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          {isAdminLogin ? (
            <button
              onClick={handleLogoutButton}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/admin/login")}
              className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Login
            </button>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-4 gap-3">

            <Link
              to="/admin/dashboard"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/employeeList"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Employees
            </Link>

            <Link
              to="/admin/allAttendance"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Attendance
            </Link>

            <Link
              to="/admin/leaveRequest"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-gray-700"
            >
              Leaves
            </Link>

            {isAdminLogin ? (
              <button
                onClick={handleLogoutButton}
                className="py-2 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/admin/login")}
                className="py-2 bg-green-500 text-white rounded-lg"
              >
                Login
              </button>
            )}

          </div>

        </div>

      )}

    </nav>
  );
};

export default AdminNavbar;