import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({

  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  leaveType: {
    type: String,
    enum: [ "Casual Leave","Sick Leave","Annual Leave","Work From Home"],
    required: true
  },

  totalDays:{
     type :Number
  },

  fromDate: {
    type: Date,
    required: true
  },

  toDate: {
    type: Date,
    required: true
  },

  reason: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }

}, { timestamps: true });

export const Leave = mongoose.model("Leave", leaveSchema);
