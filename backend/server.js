import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectDB } from './Config/db.js';
import { errorHandler } from './error/errorHandler.js';

import router from './router/UserRoutes.js'
import router2 from './router/RestruantRoutes.js';
import router3 from './router/OrderRoutes.js';

const PORT=process.env.PORT;
const app=express()

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use('/',router,router2,router3);

app.use(errorHandler)
  
app.listen(PORT,()=>{
    console.log(`Application running on the port ${PORT}`)
})