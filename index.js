
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {auth} from "./middleware/auth.js"
import { handleRegister } from "./controllers/handleRegister.js"
import { handleLogin } from "./controllers/handleLogin.js"
import { handleAddProduct } from "./controllers/handleAddProduct.js"
import { handleDeleteProduct } from "./controllers/handleDeleteProduct.js"
import { handleGetAllProduct } from "./controllers/handleGetAllProduct.js"

const app=express()
app.use(cors())
app.use(express.json())

const port=process.env.PORT || 3001

const url= "mongodb://localhost/crudApp"

app.get("/",(req,res)=>{
    console.log("welcome")
    res.json("welcome")
})

//register new user
app.post("/register",(req,res)=>{handleRegister(req,res,db)})

//handle login details sent from user
app.post("/login", (req,res)=>{handleLogin(req,res)})

//handle authorization, to secure some end points
app.get("/check_authorized", auth,(req,res)=>{res.status(200).json("Success")})

//get all products
app.get("/all_products",auth,(req,res)=>{handleGetAllProduct(req,res)})

//add new product
app.post("/add_product",auth,(req,res)=>{handleAddProduct(req,res)})

//delete product
app.delete("/product/:id/",auth,(req, res) => { handleDeleteProduct(req,res) });

app.listen(port,()=>{
    console.log("server started on port",port)
})


const db=mongoose.connect(url);
db.then(() => console.log('Database Connected!'));