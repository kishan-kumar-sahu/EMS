


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Employee Management System
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-100">
          A full-stack web application to manage employee records, attendance,
          leave requests and salary information efficiently.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          System Modules
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
            <p className="text-gray-500">
              Overview of employee data and system statistics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Attendance</h3>
            <p className="text-gray-500">
              Track daily employee attendance and presence records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Leave Management</h3>
            <p className="text-gray-500">
              Employees can request leave and admin can approve them.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Salary</h3>
            <p className="text-gray-500">
              Manage employee salary records and payment details.
            </p>
          </div>

        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tech Stack
        </h2>

        <div className="flex justify-center flex-wrap gap-6 text-lg">

          <span className="bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full font-medium">
            React
          </span>

          <span className="bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full font-medium">
            Tailwind CSS
          </span>

          <span className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-medium">
            Node.js
          </span>

          <span className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-medium">
            Express.js
          </span>

          <span className="bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full font-medium">
            MongoDB
          </span>

        </div>
      </div>

    </div>
  );
};

export default Home;

