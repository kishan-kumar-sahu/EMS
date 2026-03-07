

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppContext from "../Context/AppContext";

const Navbar = () => {

  const navigate = useNavigate();
  const { isloggedIn, logout } = useContext(AppContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutButton = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-xl font-bold">EMS</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">

            <Link to="/userDashboard">Dashboard</Link>
            <Link to="/attendance">Attendance</Link>
            <Link to="/leave">Leaves</Link>
            <Link to="/salary">Salary</Link>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">

            {isloggedIn ? (
              <>
                <Link to="/profile" className="bg-blue-600 text-white px-3 py-1 rounded">
                  Profile
                </Link>

                <button
                  onClick={handleLogoutButton}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Login
              </button>
            )}

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden px-4 pb-4 space-y-2">

          <Link to="/userDashboard" className="block">Dashboard</Link>
          <Link to="/attendance" className="block">Attendance</Link>
          <Link to="/leave" className="block">Leaves</Link>
          <Link to="/salary" className="block">Salary</Link>

          {isloggedIn ? (
            <>
              <Link to="/profile" className="block bg-blue-600 text-white p-2 rounded">
                Profile
              </Link>

              <button
                onClick={handleLogoutButton}
                className="w-full bg-red-600 text-white p-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Login
            </button>
          )}

        </div>

      )}

    </nav>
  );
};

export default Navbar;