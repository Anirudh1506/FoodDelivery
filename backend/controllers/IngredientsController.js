import Ingredients from "../Models/Ingredients.js"; 

export const addIngre=async(req,res)=>{
    const {Name}=req.body;
    
    const Ing=await Ingredients.create({
        Name
    });
    return res.json(Ing);
}