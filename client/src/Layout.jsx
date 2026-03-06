
import React from 'react'
  import AdminNavbar from './Admin _Side/AdminNavbar'
import  Navbar from "./Employee_side/Navbar"
import { useContext } from 'react'
import AppContext from './Context/AppContext'


const Layout = () => {
   const {role}= useContext(AppContext)
       
  return (
    

<>
 {   role=="admin"? <AdminNavbar></AdminNavbar>: <Navbar></Navbar>}
</>

  )
}

export default Layout