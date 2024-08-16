import express from 'express';
import { login, register } from '../controllers/auth-controller.js';
import { getProducts } from '../controllers/product-controller.js';

const router = express.Router();

router.post('/register',register)
router.post('/login',login)

router.get('/products',getProducts)

export default router;