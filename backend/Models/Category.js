import mongoose from "mongoose";

const categorySchema=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    }
});

export default mongoose.model("Category",categorySchema)