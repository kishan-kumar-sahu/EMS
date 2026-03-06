
import mongoose from "mongoose"

  const UserSchema= new mongoose.Schema({
   
   name:{
    type:String,
     require: true,
   },
    email:{
    type: String,
    require: true,
     unique: true,
    },
     
     password:{
         
        type: String,
         require: true
     },
      
    phone :{
      type:  String,
       required : true,
    },
    department:{
    type: String,
      required: true,
    },
    
    position:{
       type: String,
       required: true,
    },
      salary:{
     type: Number,
      default: 0,
      }, 
    address:{
    type: String,
     required: true,
    },

     role:{
      type:String,
      enum:["admin", "employee"],
       default: "employee"
     },


       isActive: {
      type: Boolean,
      default: true,
    }

      
  },{timestamps: true})


   export const User= mongoose.model("User", UserSchema)