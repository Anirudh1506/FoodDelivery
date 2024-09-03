import mongoose from "mongoose";
import Address from './AddressSchema.js'
import Restraunt from "./Restraunt.js";

const restrauntOwnerSchema=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    },
    Address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Address
    }],
    Username:{
        type:String,
        required:['true']
    },
    Password:{
        type:String,
        required:['true']
    },
    Contact:{
        type:Number,
        required:['true']
    },
    Restraunt_Name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Restraunt
    }
});

export default mongoose.model("RestOwner",restrauntOwnerSchema)