import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs from "fs"

    cloudinary.config({ 
        cloud_name:process.env.CLOUD_NAME, 
        api_key:process.env.API_KEY, 
        api_secret: process.env.API_SECRET
    });

     const cloudinaryUpload = async (file)=>{
try {
    if(!file) return null
   const response=await cloudinary.uploader.upload(file,{
        resource_type: "image"   
    })
    console.log("file has been successfully uploaded on cloudinary",response.url);
    return response;
} catch (error) {
    fs.unlinkSync(file)
    return null;
}
     }
    export{cloudinaryUpload}