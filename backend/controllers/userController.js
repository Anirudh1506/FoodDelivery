import Admin from "../Models/Admin.js";
import Customer from "../Models/Customer.js";
import RestrauntOwner from "../Models/RestrauntOwner.js";

import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export const createAdmin=async(req,res)=>{
    const {username,password}=req.body;
    const adm=await Admin.findOne({Username:username})
    if(adm){
        return res.status(404).send("User exists");
    }
    const am=await Admin.create({
        Username:username,
        Password:password
    })
    return res.status(201).send("User created");
}

export const createCustomer=async(req,res)=>{
    const {name,username,password,contact}=req.body;
    if(!username || !name || !password || !contact) return res.status(400).send("Enter all the fields");
    
    const c=await Customer.findOne({Username:username})
    if(c) return res.status(400).json({message:"user already exists"})
    
    const salt=await bcrypt.genSalt(10);
    const hpwd=await bcrypt.hash(password,salt);

    await Customer.create({
        Username:username,
        Name:name,
        Password:hpwd,
        Contact:contact
    });
    return res.status(201).json({message:"Done"})
}