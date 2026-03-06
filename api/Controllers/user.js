import {User}  from "../Models/user.js"
import bcrypt  from "bcrypt"

import jwt  from "jsonwebtoken"

import { Leave } from "../Models/leave.js"
import { Attandance } from "../Models/attendance.js"



   

 export const userRegister =async(req,res)=>{


        const { name, email, password,  phone , department ,position ,address } = req.body
         console.log(name, email, password,  phone , department ,position ,address )
      try {
            
    const user= await User.findOne({email}) 

       if(user){
       return res.json({ message:" user Already exist", success: false })
       }
        
    const hashPassword=  await bcrypt.hash(password, 10)
          
         const  RegisterUser  =   await  User.create({
            name, 
             email,
             password : hashPassword,
   phone , 
   department , 
    position ,  
     address

        })
     
         res.json({ message:  "register Successfully", RegisterUser, success: true })

      } catch (error) {
        
         res.json({ message:error.message})

      }

}

 export const userLogin=async(req,res)=>{

     const {email, password} = req.body
     try {
      
       const user= await User.findOne({email})

      if(!user) {
         return res.json({ message: "user  not found ", success: false})
      }
      
      const ismatches=  await  bcrypt.compare(password, user.password)

         if(!ismatches){
             return res.json({message:"Invalid Creandetial ", success:false})
         }

        const token =   jwt.sign({userId: user._id , role: user.role}, process.env.JWT_SECRET_KEY, { expiresIn:"360d"}) 

           res.json({ message:` welcome ${user.name}`, user, token,  role: user.role, success: true})

     } catch (error) {
      
      res.json({ message:error.message})
     }
}


  export const profileUser= async (req,res)=>{
           
            const id =req.user._id
         
   try {
        const user= await User.findById(id)
           if(!user){
            return res.json({message:" user not found", success: false})
           }
            
           res.json({ user, success: true})
            
          
   } catch (error) {
      res.json({message: error.message}) 
   }


  }


  export  const editProfile = async (req,res)=>{
     
     const  allBody=  req.body;
     
   const userId= req.user._id
   
        
     
     try {
      
   const user= await User.findByIdAndUpdate( userId,allBody ,{new:true})

       if(!user){
          return res.json({message: "User not found ",  success: false })
       }

          res.json({message: "Profile updated successfully", user,  success: true})


     } catch (error) {

         res.json({ message: error.message})
      
     }
  }




                  //      for admin 


  


   export const AllEmployee = async (req, res) => {
  try {



    const employees = await User.find({ role: "employee" })


    res.json({
      success: true,
      employees
    })

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    })
  }
}            

   export const DeleteEmployee= async(req,res)=>{

             const {id}= req.params;
             
               
        try {
       
              const employee= await User.findByIdAndDelete(id)
           
               if(!employee){
                   return res.json({message: " Employee not found ", success: false})
               }

   
                    await Leave.deleteMany({employeeId:id})
                    await Attandance.deleteMany({employeeId:id})















               res.json({message:"Delete  successfully ",   employee,success: true})



        } catch (error) {
         

          res.json({message: error.message})
        }
   }    
     
 
export  const  ViewEmployee= async(req,res)=>{
  
       const {id}= req.params

     try {
        const employee= await User.findById(id) 
 
           if(!employee){
             return res.json({message:"employee not exist", success: false})
           }


               res.json({message:" Employee", employee,  success: true})
     } catch (error) {
      

       res.json({message: error.message
       })
     }




}



  export const  UpdateEmployee= async(req,res)=>{

       

     try {

           const{id}=  req.params
             const AllBody= req.body;
        
        const employee= await User.findByIdAndUpdate(id, AllBody, {new : true})

   if(!employee){
       return res.json({message:"  Employee not found ", success: false})
   }

    res.json({ message:  "Updated successfully", employee,  success: true })
     } catch (error) {
       res.json({ message: error.message})
     }
  }


  