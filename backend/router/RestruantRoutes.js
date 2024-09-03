import express from 'express'

import { verifyAuth } from '../middleware/authMiddleware.js';
import { upload1, addRestraunt } from '../controllers/restrauntController.js';
import { upload2,addItem } from '../controllers/menuController.js';
import { AddCategory } from '../controllers/CategoryController.js';
import { addIngre } from '../controllers/IngredientsController.js';

const router2=express.Router();

router2.post('/res',verifyAuth,addRestraunt);
router2.post('/ing',addIngre);
router2.post('/cat',AddCategory);
router2.post('/item',verifyAuth,addItem);

export default router2