import express from "express";
import { login, register } from "../controllers/auth-controller.js";
import {
  getProducts,
  addProduct,
  getNumberOfProducts,
  getAllCategories,
  getAllBrands,
} from "../controllers/product-controller.js";
import { verify } from "./privateRoute.js";

const router = express.Router();

router.get("/number-of-products",verify, getNumberOfProducts);
router.get("/categories",verify, getAllCategories);
router.get("/brands",verify, getAllBrands);
router.get("/products",verify, getProducts);

// router.post("/addProduct", addProduct);

router.post("/register", register);
router.post("/login", login);

router.get("/", (req, res) => res.send("hello world!"));

export default router;
