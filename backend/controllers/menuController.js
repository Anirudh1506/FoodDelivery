import Menu from '../Models/Menu.js'
import Ingredients from '../Models/Ingredients.js';
import Category from '../Models/Category.js';
import Restraunt from '../Models/Restraunt.js';

import multer from 'multer'

const storage=multer.diskStorage({
    destination: function (req, file, cb) {
      const category=req.body.Cat
      cb(null, `./uploads/menu_tems/${category}`)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

export const upload2=multer({storage:storage})

export const addItem=async(req,res,next)=>{
    const {Name, Price, VegorNon, Cat,Ing}=req.body;
    const user=req.user;
    let ingre=[]
    console.log(Ing);

    const cat=await Category.findOne({Name:Cat});
    for(let inr of Ing){
        const i=await Ingredients.findOne({Name:inr});
        if(!i){
            const e=new Error("Ingredient Not found");
            return next(e);
        }
        ingre.push(i._id);
    }

    const menu_item= await Menu.create({
        Name:Name,
        Price:Price,
        VegorNon:VegorNon,
        Category:cat,
        Ingredients:ingre
    });

    const res_name=await Restraunt.findById(user.Restraunt_Name)

    console.log(res_name)

    res_name.Menu.push(menu_item);
    await res_name.save();

    return res.json(menu_item)
}