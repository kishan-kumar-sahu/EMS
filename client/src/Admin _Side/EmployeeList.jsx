


import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {

  const navigate = useNavigate();

  const { allEmployee, AllEmployee, DeleteEmployee } = useContext(AppContext);

  const [search, setSearch] = useState("");

  useEffect(() => {
    AllEmployee();
  }, []);

  // filter
  const filteredEmployee = allEmployee?.filter((data) =>
    data?.name?.toLowerCase().includes(search?.toLowerCase())
  );

  return (
    <div className="pt-24 px-4 md:px-8 bg-gray-100 min-h-screen">

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Employee List
      </h1>

      <div className="bg-white shadow-md rounded-xl p-4 md:p-6">

        {/* Search */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employee..."
            className="border px-4 py-2 rounded-md w-full md:w-72 outline-none focus:ring-2 focus:ring-blue-400"
          />

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-left border-collapse min-w-[700px]">

            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Department</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Salary</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredEmployee?.length > 0 ? (

                filteredEmployee?.map((data) => (

                  <tr
                    key={data._id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-3">{data?._id}</td>
                    <td className="p-3">{data?.name}</td>
                    <td className="p-3">{data?.department}</td>
                    <td className="p-3">{data?.position}</td>
                    <td className="p-3">{data?.phone}</td>
                    <td className="p-3">₹ {data?.salary}</td>

                    <td className="p-3">

                      <div className="flex flex-wrap gap-2 justify-center">

                        <button
                          onClick={() =>
                            navigate(`/admin/viewEmployee/${data?._id}`)
                          }
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                        >
                          View
                        </button>

                        <button
                          onClick={() =>
                            navigate(`/admin/editEmployee/${data?._id}`)
                          }
                          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => DeleteEmployee(data?._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-6 text-gray-500"
                  >
                    No Employee Found
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default EmployeeList;








