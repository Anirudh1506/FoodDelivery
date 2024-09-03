import Address from "../Models/AddressSchema.js";
import Customer from "../Models/Customer.js";
import RestrauntOwner from "../Models/RestrauntOwner.js";

export const createAddress=async(req,res,next)=>{
    const {door_no,building,street,locality,state,pincode}=req.body;
    const user=req.user;
    if(!door_no || !building || !street || !state || !pincode){
        const e=new Error("Enter the required Details for the address");
        return next(e);
    }

    const findAddress=await Address.findOne({Door_No:door_no});
    
    if(findAddress){
        const e=new Error("This Address already exists");
        return next(e);
    }

    const address=await Address.create({
        Door_No:door_no,
        Building:building,
        Street:street,
        Locality:locality,
        State:state,
        Pin_Code:pincode
    });
    
    let finduser=await Customer.findOne({Username:user.Username})
    if(finduser){
        finduser.Address.push(address);
        await finduser.save();
        return res.status(201).json(user);
    }

    finduser=await RestrauntOwner.findOne({Username:user.Username})
        finduser.Address.push(address);
        await finduser.save();
        return res.status(201).json(user);
}