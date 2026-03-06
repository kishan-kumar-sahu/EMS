import { useNavigate } from "react-router-dom";

const  AddEmployee = () => {

    
        const navigate=    useNavigate()
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-24 px-4">

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl">

        {/* Header */}
        <div className="bg-blue-600 text-white px-8 py-5 rounded-t-xl">
          <h2 className="text-2xl font-semibold"> Add Employee</h2>
          <p className="text-sm opacity-80">
             Add  employee information
          </p>
        </div>

        {/* Form */}
        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"   >

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
             
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
      
              
              type="email"
           
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone
            </label>
            <input
              type="text"
   
           
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Department
            </label>
            <input
              type="text"
           
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Position
            </label>
            <input
              type="text"
            
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
             {/* salary */}
                <div>
            <label className="block text-sm text-gray-600 mb-1">
            Salary
            </label>
            <input
              type="text"
            
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">
              Address
            </label>
            <textarea
               
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
                onClick={()=> navigate("/admin/employeeList")}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
               Add Employee
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddEmployee;