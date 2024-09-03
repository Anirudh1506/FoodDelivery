import mongoose from 'mongoose'
import Order from './Orders.js'

const deliverypersonSchema=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    },
    Rating:{
        type:Number,
        required:['true']
    },
    Delivered_Orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Order
    }],
    Complaints:[{
        type:String,
    }]
},{
    timestamps:true
});

export default mongoose.model("Delivery",deliverypersonSchema);