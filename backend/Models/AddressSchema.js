    import mongoose from "mongoose";

    const addressSchema= mongoose.Schema({
        Door_No:{
            type:Number,
            required:['true','enter door_no'],
            unique:true
        },
        Building:{
            type:String,
            required:['true','enter door_no']
        },
        Street:{
            type:String,
            required:['true','enter door_no']
        },
        Locality:{
            type:String,
            required:false
        },
        State:{
            type:String,
            required:['true','enter door_no']
        },
        Pin_Code:{
            type:Number,
            required:['true','enter door_no'],
        }
    });

    export default mongoose.model("Address",addressSchema);