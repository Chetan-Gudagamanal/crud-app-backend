


// app.get("/all_products",async(req,res)=>{
//   try{
//     res.status(200).json(await products.find())
//   }catch(err){
//     res.status(500).json(err)
//   }
// })


import { products } from "../models/ProductSchema.js"

export const handleGetAllProduct=async(req,res)=>{
    try{
        res.status(200).json(await products.find())
      }catch(err){
        res.status(500).json(err)
      }
  }