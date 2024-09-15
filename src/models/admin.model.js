import mongoose,{Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'modarator'], 
    default: 'admin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
  phone:{
    type:Number,
    required:true
}
});

adminSchema.pre('save', async function (next) {
  if(!this.isModified("password"))return next();
    this.password=bcrypt.hash(this.password,8)
    next()
})

adminSchema.methods.isPasswordCorrect=async function(password) {
    return await bcrypt.compare(password,this.password)   
}

export const Admin =mongoose.model("Admin",adminSchema)
