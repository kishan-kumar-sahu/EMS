import express from "express"
import { AllLeave, allMyLeave, deleteSingleLeave, employeeLeaveApply, getSingleLeave, leaveStatusUpdate } from "../Controllers/leave.js"
 import { userAuth } from "../Middlewares/userAuth.js"
   import { AdminAuth } from "../Middlewares/adminAuth.js"
 const router  = express.Router()

            
          //   /api/leave/apply 
  router.post("/apply",  userAuth,  employeeLeaveApply)


   router.get("/all", userAuth,  allMyLeave)
   router.get("/:id",userAuth, getSingleLeave)

   router.delete("/deleteleave/:id", userAuth, deleteSingleLeave)
   




//     for admin
                     //  /api/leave/admin/all
  router.get("/admin/all",    userAuth, AdminAuth,AllLeave)

    //  /api/leave/admin/updateleave/:id
    router.put("/admin/updateleave/:id",   userAuth, AdminAuth,leaveStatusUpdate)        

 export  default router