import Order from '../Models/Orders.js'
import Menu from '../Models/Menu.js';
import Restraunt from '../Models/Restraunt.js';

export const createOrder=async(req,res,next)=>{
    const {ord,quan}=req.body;
    const user=req.user;
    let price=0;
    for(let i=0;i<ord.length;i++){
        const item=await Menu.findOne({Name:ord[i]});
        price+=(item.Price*quan[i]);
    }

    const Rest_Name=await Restraunt.findById(user.Restraunt_Name)

    const order=await Order.create({
        Customer:user,
        Restraunt:Rest_Name,
        Price:price,
        Order:ord,
        Quantity:quan
    });

    return res.status(201).json(order);
}