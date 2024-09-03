import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import Category from "../Models/Category.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const AddCategory=async(req,res)=>{
    const {Name}=req.body;

    const cat=Category.create({
        Name
    });

    if(cat){
        const dirPath = path.join(__dirname, '..', 'uploads', Name);

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    }

    return res.json(cat);
}