import Product from "../models/productModel.js";
import AsyncHandler from "express-async-handler";
//Fetching all products from backend
// @route    GET/api/products
// @access   Public Routes
const getProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});


//Fetching single product with id from backend
// @route    GET/api/products
// @access   Public Routes
const getProductById = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getProducts ,getProductById};