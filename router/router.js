import express from "express";
import { login, register } from "../controllers/auth-controller.js";
import {
  getProducts,
  addProduct,
  getNumberOfProducts,
  getAllCategories,
  getAllBrands,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/number-of-products", getNumberOfProducts);
router.get("/categories", getAllCategories);
router.get("/brands", getAllBrands);
router.get("/products", getProducts);

router.post("/addProduct", addProduct);

router.post("/register", register);
router.post("/login", login);

router.get("/", (req, res) => res.send("hello world!"));

export default router;
