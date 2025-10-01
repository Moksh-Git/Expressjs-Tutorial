import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
} from "../controller/product.js";
const productRouter = express.Router();



productRouter
  .get("/", getAllProducts)
  .get("/:id", getProduct)
  .post("/", createProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default productRouter