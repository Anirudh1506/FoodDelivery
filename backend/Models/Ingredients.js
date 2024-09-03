import mongoose from "mongoose";

const ingredientSchema=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    }
});

export default mongoose.model("Ingredients",ingredientSchema);