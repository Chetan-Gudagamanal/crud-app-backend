
import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        userEmail:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        active:{
            type:Boolean,
            required:true
        }
    }
)

export const users=mongoose.model("user",userSchema)