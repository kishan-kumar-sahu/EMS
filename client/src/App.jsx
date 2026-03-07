import { useContext } from "react"
import AppContext from "./Context/AppContext"
import {BrowserRouter, Routes, Route } from "react-router-dom"


import Navbar from "./Employee_side/Navbar"
 import Login from "./Employee_side/Login"

import Profile from "./Employee_side/Profile"
import Leave from "./Employee_side/Leave"
import DashBoard from "./Employee_side/DashBoard"
 import {ToastContainer} from "react-toastify"

 import 'react-toastify/dist/ReactToastify.css';
import Register from "./Employee_side/Register"
import CreateLeave from "./Employee_side/CreateLeave"
import View from "./Employee_side/View"
import Attendance from "./Employee_side/Attendance"
import Salary from "./Employee_side/Salary"
import AdminNavbar from "./Admin _Side/AdminNavbar"

import EditProfile from "./Employee_side/EditProfile"
  
//   in layout  navbar and adminNavbar 
 import Layout from "./Layout"
import EmployeeList from "./Admin _Side/EmployeeList"
  import AdminDashboard  from "./Admin _Side/AdminDashboard"
import ViewEmployeeDetails from "./Admin _Side/ViewEmployeeDetails"
import EditEmployee from "./Admin _Side/EditEmployee"
import AddEmployee from "./Admin _Side/AddEmployee"


import AttendanceManagement from "./Admin _Side/AttendanceManagement"
import LeaveRequests from "./Admin _Side/LeaveRequests"

const App = () => {
   
    
  return (
  <>
    <BrowserRouter>
 <Layout></Layout>
       
    
     
           <ToastContainer/>
       <Routes>
        <Route path="/register"  element={<Register></Register>}></Route>
    <Route path="/login"  element={<Login></Login>}></Route>
    <Route path="/profile"  element={<Profile></Profile>}></Route>
     <Route path="/leave"  element={<Leave></Leave>}></Route>
         <Route path="/attendance"  element={<Attendance></Attendance>}></Route>
    <Route path="/userDashboard"  element={<DashBoard></DashBoard>}></Route>



     <Route path="/createLeave"  element={<CreateLeave></CreateLeave>}></Route>

          <Route path="/view/:leaveId"  element={<View></View>}></Route>

           <Route path="/salary"  element={<Salary></Salary>}></Route>
             <Route path="/editprofile"  element={<EditProfile></EditProfile>}></Route>






           {/*   for admin */}


<Route path="/admin/employeeList"  element={<EmployeeList></EmployeeList>}></Route>

  <Route path="/admin/dashboard"  element={<AdminDashboard></AdminDashboard>}></Route>
    <Route path="/admin/viewEmployee/:employeeId"  element={<ViewEmployeeDetails></ViewEmployeeDetails>}></Route>

    <Route path="/admin/editEmployee/:employeeId"  element={<EditEmployee></EditEmployee>}></Route>

 
  
    <Route path="/admin/addEmployee"  element={<AddEmployee></AddEmployee>}></Route>
    <Route path="/admin/allAttendance"  element={<AttendanceManagement></AttendanceManagement>}></Route>

  
   <Route path="/admin/leaveRequest"  element={<LeaveRequests></LeaveRequests>}></Route>


       </Routes>
    
    </BrowserRouter>


     
  </>
  )
}

export default App