import { products } from "../models/ProductSchema.js"

export const handleAddProduct=async(req,res)=>{
    const {productName,productDesc}=req.body
    const product=new products({
        productName,
        productDesc,
      createdAt: new Date().toISOString()
    })
    await product.save()
    console.log("success")
    res.status(200).json("success")
  }