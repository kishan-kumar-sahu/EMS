
import { Attandance } from "../Models/attendance.js";




export const CheckInAttendance= async (req, res) => {
  try {

    const employeeId = req.user;

    const todayStart = new Date();
    todayStart.setHours(0,0,0,0);

    const todayEnd = new Date();
    todayEnd.setHours(23,59,59,999);

    // prevent multiple checkin
    const alreadyCheckedIn = await Attandance.findOne({
      employeeId,
      date: { $gte: todayStart, $lte: todayEnd }
    });

    if (alreadyCheckedIn) {
      return res.json({
        message: "Already checked in today",
        success: false,
      });
    }

    const attendance = await Attandance.create({
      employeeId,
      checkIn: new Date(),
      status: "working",
    });

    res.json({
      message: "Attendance submitted successfully",
      attendance,
      success: true,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      success:false
    });
  }
};

export const CheckoutAttendance = async (req, res) => {
  try {

    const employeeId = req.user;

    const todayStart = new Date();
    todayStart.setHours(0,0,0,0);

    const todayEnd = new Date();
    todayEnd.setHours(23,59,59,999);

    const attendance = await Attandance.findOne({
      employeeId,
      date: { $gte: todayStart, $lte: todayEnd }
    });

    if (!attendance) {
      return res.json({
        message: "First Check-In",
        success: false,
      });
    }

    if (attendance.checkOut) {
      return res.json({
        message: "Already Checked Out",
        success: false,
      });
    }

    attendance.checkOut = new Date();
    attendance.status = "present";

    await attendance.save();

    res.json({
      message: "CheckOut successfully",
      attendance,
      success: true,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      success:false
    });
  }
};


export const getAttendance= async(req,res)=>{
  
      const  employeeId= req.user;

      try {

        const attendances= await Attandance.find({employeeId}).sort({createdAt:-1})
           
    
        if(! attendances ||  attendances.length === 0){
           return res.json({message:"Attendance not found ", success: false})
        }

        res.json({message:"All Attendance !!",  attendances,  success: true})

      } catch (error) {
        
      }
}

 
           //  For admin     get All Attendances  


  export const  getAllAttendances=  async(req,res)=>{


     try {
         const  att=  await   Attandance.find().sort({createdAt: -1}).populate("employeeId");

           if(!att){
             return res.json({ message:' Attendances not found'})
           }

              res.json({message:' All Attendances',  att, success: true})
     } catch (error) {
      
        res.json({message: error.message})
     }
  }


   


