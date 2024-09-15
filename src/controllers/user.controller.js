import { asyncHandler } from "../utils/asynchandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { cloudinaryUpload } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";
const registerUser=asyncHandler(async(req,res)=>{


const{username,email,password}=req.body

if ([username,email,password].some((field)=>field?.trim()==="" 
)){
    throw new apiError(400,"all fields are required")
}
const existedUser=User.findOne({email})
if(existedUser){
    throw new apiError(409,"user with this email already existed")
}
const imageLocalpath=req.files?.Image[0]?.path;
if (!imageLocalpath){
    throw new apiErrorError(400,"image is required");
    
}
const image=await cloudinaryUpload(imageLocalpath)
if (!image) {
    throw new apiErrorError(400,"image is required");
    
}
const user=await User.create({
    username,
    image:image.url,
    email,
    password
})
const createdUser=await User.findById(user._id).select("-password-refreshToken")
if(!createdUser){
    throw new apiError(500,"something went wrong");
    
}
return res.status(201).json(
    new apiResponse(200,createdUser,"User registered successfully >_<")
)
}
)

export{registerUser}