import mongoose from "mongoose";

export const connectDB=async()=>{
    const url=process.env.MONGO_URI
    try{
        const conn=await mongoose.connect(url);
        console.log(`Database connected to ${conn.connection.host}`)
    }catch(e){
        console.log(e);
    }
}