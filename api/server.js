import express  from "express"
import mongoose from "mongoose"
 import cors from "cors"
  import bodyParser from "body-parser"
 import  UserRouter from "./Routes/user.js"
   import LeaveRouter from "./Routes/leaveRoutes.js"
    import dotenv from "dotenv";
    dotenv.config();   
   
     import AttendanceRouter from "./Routes/AttendanceRoutes.js" 


      const port =process.env.PORT; 
    


 const app= express()
  
  app.use(cors())
    app.use(bodyParser.json())  

         
      app.use("/api/user", UserRouter  )
      
    app.use("/api/leave", LeaveRouter  )



     app.use("/api/attendance", AttendanceRouter)





      //    for admin

      //  app.use("/api/admin", AdminRouter)
    
 app.get("/",(req,res)=>{
    res.send("hello kisaha")
 })


  

 try {
    mongoose.connect(process.env.MONGO_URI).then(()=>
   console.log("mongodb is connected "))
  } catch (error) {
   
    console.log("mongodb  error ",error)
  }





 app.listen(port,()=>{
    console.log(`server is started port number on ${port}`)
 })