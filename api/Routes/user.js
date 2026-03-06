import  express from "express"
import { AllEmployee,
   DeleteEmployee,
    editProfile,
     profileUser, 
     UpdateEmployee,
      userLogin, 
      userRegister, 
      ViewEmployee
     } from "../Controllers/user.js"
import { userAuth } from "../Middlewares/userAuth.js"

import { AdminAuth } from "../Middlewares/adminAuth.js"
 const router = express.Router()

 
   router.post("/register", userRegister)

router.post("/login", userLogin)

          //   /api/user/profile
  router.get("/profile",   userAuth,profileUser)


              //   /api/user/profile-update
   router.put("/profile-update", userAuth,  editProfile)



            //   for admin

            //  /api/user/allEmployee
   router.get("/allEmployee",  userAuth  ,AllEmployee)
         
      //  api/user/employee/idhoga
   router.delete("/employee/:id", userAuth ,  AdminAuth, DeleteEmployee)


            //    get single view 
   router.get("/employee/:id",  userAuth , AdminAuth, ViewEmployee)

   router.put("/employee/:id",  userAuth , AdminAuth, UpdateEmployee)




  export default router

