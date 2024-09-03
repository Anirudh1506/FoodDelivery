import mongoose from "mongoose";
import Address from './AddressSchema.js'
import Ingredients from "./Ingredients.js";

const customerSchema=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    },
    Username:{
        type:String,
        required:['true']
    },
    Password:{
        type:String,
        required:['true']
    },
    Address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: Address
    }],
    Contact:{
        type:Number,
        required:['true']
    }
});

export default mongoose.model("Customer",customerSchema);