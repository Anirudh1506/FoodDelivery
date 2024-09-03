import multer from "multer"
import Restraunt from "../Models/Restraunt.js"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/restraunts')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

export const upload1=multer({storage:storage})


export const addRestraunt=async(req,res)=>{
    const {name,contact,rating,veg}=req.body;
    const user=req.user;
    const rest=await Restraunt.create({
      Name:name,
      Contact_Info:contact,
      Rating:rating,
      VegorNon:veg,
    });

    user.Restraunt_Name=rest;
    user.save();

    return res.json(rest);

}