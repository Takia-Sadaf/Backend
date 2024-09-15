import mongoose from "mongoose"
const orderItemsSchema=new mongoose.Schema({
    orderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
},{})

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    phone:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Canceled","Delivered"]
    }

},{timestamps:True})
export const Order =mongoose.model("Order",orderSchema)