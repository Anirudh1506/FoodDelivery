import mongoose from 'mongoose';
import Customer from './Customer.js'
import Restraunt from './Restraunt.js'
import Menu from './Menu.js'

const orderSchema=mongoose.Schema({
    Customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Customer
    },
    Restraunt:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Restraunt
    },
    Price:{
        type:Number,
        required:['true']
    },
    Order:[{
        type:String,
        required:['true']
    }],
    Quantity:[{
        type:Number,
        required:['true']
    }]
},{
    timestamps:true
});


export default mongoose.model("Order",orderSchema);