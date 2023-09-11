import mongoose from "mongoose";

const productSchema=new mongoose.Schema(
    {
        productName:{
            type:String,
            required:true
        },
        productDesc:{
            type:String,
            required:true
        }
    }
)

export const products=mongoose.model("product",productSchema)