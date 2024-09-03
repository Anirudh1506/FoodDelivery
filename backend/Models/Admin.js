import mongoose from "mongoose";

const adminSchema=mongoose.Schema({
    Username:{
        type:String,
        required:['true']
    },
    Password:{
        type:String,
        required:['true']
    }
});

export default mongoose.model("Admin",adminSchema)