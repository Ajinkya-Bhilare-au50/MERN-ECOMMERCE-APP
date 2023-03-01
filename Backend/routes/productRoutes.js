import express from "express";
import Product from "../models/productModel.js";
import AsyncHandler from "express-async-handler";

const router = express.Router();
const app = express();
//Fetching all products from backend
// @route    GET/api/products
// @access   Public Routes
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
//Fetching single product with id from backend
// @route    GET/api/products
// @access   Public Routes
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
        res.status(404)
        throw new Error('product not found')
    }
  })
);

export default router;
