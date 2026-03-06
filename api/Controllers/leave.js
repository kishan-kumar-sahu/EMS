import { Leave } from "../Models/leave.js";

export const employeeLeaveApply= async(req,res)=>{


    try {

           const employeeId = req.user
               
           
      const {  leaveType,  totalDays,  fromDate,  toDate, reason}= req.body  

       const  leaveApply= await Leave.create({
             employeeId,
            leaveType, 
             totalDays, 
              fromDate, 
               toDate,
                reason
           })
  res.json({ message:" Successful  Apply ",  leaveApply,success: true})
            



          
    } catch (error) {
        
         res.json({ message: error.message})
    }
}




export const allMyLeave = async (req, res) => {

  try {

    const employeeId = req.user;   // logged-in user

    const allLeave = await Leave.find({
      employeeId     
    }).sort({ createdAt: -1 });

    if (!allLeave.length) {
      return res.json({
        message: "Leave not found",
        success: false
      });
    }

    res.json({
      message: "All Leave",
      allLeave,
      success: true
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


 export const getSingleLeave = async(req,res)=>{

   const {id}= req.params;


   try {

         const  singleLeave= await Leave.findById(id)

          if(!singleLeave){
            return res.json({message:" Leave not found",   success: false})
          }

           res.json({message: "Leave",  singleLeave, success: true})
    
   } catch (error) {
    
     res.json({ message: error.message

     })
   }

 }


 export  const deleteSingleLeave= async(req,res)=>{
     
      const {id}= req.params;
 try {
    const leave= await Leave.findByIdAndDelete(id)
    
      if(!leave){
        return res.json({message:"Leave not found", success: false })
      }

   res.json({ message: "Leave wad Deleted  Successfullt", leave, success: true})


 } catch (error) {
    
      res.json({ message: error.message})
 }
 }


//     update leave   through admin



 export   const leaveStatusUpdate= async(req,res)=>{

           const {id}= req.params;
         const {status}= req.body;
     try {
           const leave= await Leave.findByIdAndUpdate(id, {status},{new : true})

           if(!leave){
            return  res.json({message: "Leave not Found", success: false})
           }

           res.json({ message:"  leave  Update was Successfully", leave, success: true})
     } catch (error) {
      
        
         res.json({ message: error.message})
     }
 }
            //   for admin

export   const AllLeave= async(req,res)=>{

   try {
       const  allLeave=  await Leave.find().sort({ createdAt:-1}).populate("employeeId")

           if(allLeave.length===0){
              return  res.json({message:"Leave not found"})
           }

            res.json({message:" All Leave", allLeave,   success: true})
   } catch (error) {
    
     res.json({ message: error.message})
   }


   }