
import jwt from "jsonwebtoken"

import { User } from "../Models/user.js"
  export const userAuth = async(req, res, next)=>{

      const token = req.header("Auth")

      if(!token){
         return res.json({message:"First Login"})
      }

     const decoded = await  jwt.verify(token,  "kishan@57#$%&2345")



         
         // req.userId= decoded.userId
      //  console.log(decoded)

          const id = decoded.userId
      
            const user =  await  User.findById(id)
             
           if(!user){
             return res.json({ message: "user not found ", success:false})
             
           }
            // console.log(" bhai  UserAuth ",user)
            
            req.user= user;
          
            req.role = decoded.role; 


 next()
 }