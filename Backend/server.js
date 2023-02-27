// require("dotenv").config();
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./config/db.js";
connectDb();

const app = express();
import products from "./data/products.js";
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
