import express from 'express'

import { createAdmin, createCustomer } from '../controllers/userController.js';
import { verifyAuth } from '../middleware/authMiddleware.js';


const router=express.Router()

router.post('/admin',createAdmin);
router.post('/customer',createCustomer);



export default router;