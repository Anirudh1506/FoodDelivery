import mongoose from "mongoose";
import Menu from "./Menu.js";

const restrauntSchem=mongoose.Schema({
    Name:{
        type:String,
        required:['true','enter name'],
        unique: true
    },
    Contact_Info:{
        type:Number,
        required:['true','enter your phone number']
    },
    Rating:{
        type:Number,
        required:['true','enter the rating']
    },
    VegorNon:{
        type:Boolean,
        required:['true','Enter the category']
    },
    Menu:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Menu
    }],
});

export default mongoose.model("Restraunt",restrauntSchem)