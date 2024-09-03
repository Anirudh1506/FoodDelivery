import mongoose from "mongoose";
import Category from "./Category.js";
import Ingredients from "./Ingredients.js";

const MenuSchema=mongoose.Schema({
    Name:{
        type:String,
        required:['true']
    },
    Price:{
        type:Number,
        required:['true']
    },
    VegorNon:{
        type:Boolean,
        required:['true']
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:  Category
    },
    Ingredients:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Ingredients
    }
    ]
});

export default mongoose.model("Menu",MenuSchema)