import { products } from "../models/ProductSchema.js"
export const handleDeleteProduct=async(req,res)=>{
    const {id,token} = req.params;
      try {
        const product = await products.findOne({id:id});
        await products.deleteOne(product)
    
        res.send({
          message: "Deleted successfully",
        });
      } catch (err) {
        console.log(err)
        res.status(500);
        res.send("Invalid Request");
      }
}


