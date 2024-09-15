import mongoose,{Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        requred:[true,'Password is required'],
        unique:true
    },

history:[{
    type:Schema.Types.ObjectId,
    ref:"Order"
}]
},{timestamps:True})
userSchema.pre("save",async function(next) {
    if(!this.isModified("password"))return next();
    this.password=bcrypt.hash(this.password,8)
    next()

})
userSchema.methods.isPasswordCorrect=async function(password) {
    return await bcrypt.compare(password,this.password)
    
}
userSchema.method.generateAccessToken=function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }

    )
}
userSchema.method.generateRefreshToken=function(){
    jwt.sign({
        _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User =mongoose.model("User",userSchema)