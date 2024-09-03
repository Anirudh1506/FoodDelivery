import jwt from 'jsonwebtoken'
import Customer from '../Models/Customer.js';
import RestOwner from '../Models/RestrauntOwner.js';
import Admin from '../Models/Admin.js';

export const verifyAuth=async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];

            const decode=jwt.verify(token,process.env.JWT_SECRET)

            let user = null;
            
            console.log(decode.username);   

            user = await Customer.findOne({ Username: decode.username }).select('-password');
            if (!user) {
                user = await RestOwner.findOne({ Username: decode.username }).select('-password');
            }
            if (!user) {
                user = await Admin.findOne({ Username: decode.username }).select('-password');
            }
            console.log(user);

            if (!user) {
                return res.status(404).send('User not found');
            }

            req.user=user;

            console.log(req.user);
            next();
        }catch(e){
            console.log(e);
        }
    }
    else{
        return res.status(401).send('Token not set')
    }
}