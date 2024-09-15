import dotenv from "dotenv"
import express from "express"
const app=express()
import connectdb from "./db/index.js";
dotenv.config({

    path : './env'
})
connectdb()
.then(()=>{
 app.listen(process.env.PORT || 10000,()=>{
    console.log(`server is running at port: ${process.env.PORT}`);
    
 })
})
.catch((error)=> {
console.log("mongo db connect to failed!!",error);

})
