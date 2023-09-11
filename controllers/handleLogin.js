import { users } from "../models/UserSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//login will work only if user.active==true
export const handleLogin=async(req,res)=>{
    const {userEmail,password}=req.body
    let user;
    try{
        if(user=await users.findOne({userEmail:userEmail})){
            console.log(user)
            if(!user.active){
                res.status(500).json("Your Account Disabled, Contact Support")
            }
            else{
                const flag=await bcrypt.compare(password,user.password)
                if(!flag){
                    res.status(500).json("Invalid credentials")
                }
                else{
                    const payload={
                        id:user._id
                    }
                    const auth_key=process.env.AUTH_KEY || "auth_key"
                    const token=jwt.sign(payload,auth_key)

                    res.status(200).json(token)
                }
            }
        }else{
            res.status(500).json("Invalid credentials")
        }
    }catch(err){
        res.status(500).json(err)
    }
    
}