import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({

  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  checkIn: {
    type: Date
  },

  checkOut:{
     type : Date
  },
  status: {
    type: String,
    enum: ["present", "absent", "working"],
    default: "present"
  }

}, { timestamps: true });

export  const Attandance= mongoose.model("Attendance", attendanceSchema);
