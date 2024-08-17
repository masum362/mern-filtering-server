import express from 'express';
import { login, register } from '../controllers/auth-controller.js';
import { getProducts,addProduct, getNumberOfProducts, getAllCategories } from '../controllers/product-controller.js';

const router = express.Router();

router.post('/register',register)
router.post('/login',login)

router.get('/products',getProducts)
router.post("/addProduct",addProduct)
router.get("/number-of-products", getNumberOfProducts);
router.get("/categories",getAllCategories)


export default router;