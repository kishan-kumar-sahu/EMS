
import express from "express"
import { CheckInAttendance, CheckoutAttendance, getAllAttendances, getAttendance } from "../Controllers/attandance.js";
 import { userAuth } from "../Middlewares/userAuth.js";

   import { AdminAuth } from "../Middlewares/adminAuth.js";
  const router = express.Router()

    //  /api/attendance/check-in
 router.post('/check-in',  userAuth,CheckInAttendance)

    //   /api/attendance/check-out
  router.post("/check-out", userAuth, CheckoutAttendance)

    //    /api/attendance/my
   router.get("/my", userAuth, getAttendance)





   
      //    for admin     //  All attendances  //  /api/attendance/all        
             
    
      router.get("/all",  userAuth, AdminAuth, getAllAttendances)
   export default router;
