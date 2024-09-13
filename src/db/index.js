import mongoose from "mongoose";
import { db_name } from "../constants.js";
 const connectdb=async()=>{
    try {
       const connectionInstance= await  mongoose.connect(`${process.env.mongodb_URL}/
        {db_name}`)
        console.log(`\n MongoDb connected!! DB host: ${
            connectionInstance.connection.host}`);
        
      } catch (error) {
          console.log("MongoDb connection error",error);
          process.exit(1)
          
          
      }
 }
 export default connectdb;