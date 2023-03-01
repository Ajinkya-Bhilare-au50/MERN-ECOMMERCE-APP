// require("dotenv").config();
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
import express from "express";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
connectDb();

const app = express();

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/products", productRoutes);
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
