import express from 'express';

import { verifyAuth } from '../middleware/authMiddleware.js';
import { createOrder } from '../controllers/orderController.js';


const router3=express.Router();

router3.post('/order',verifyAuth,createOrder);

export default router3;