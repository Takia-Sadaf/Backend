import mongoose from "mongoose"
const productSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        index:true,
        trim:true
    },
    price:{
        type:Number,
        requred:true
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true
    },
    Image:{
        type:String,
        required:true
    }
},{timestamps:True})
export const Product =mongoose.model("Product",productSchema)