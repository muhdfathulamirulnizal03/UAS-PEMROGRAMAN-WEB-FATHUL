const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/suppliers", supplierRoutes);
app.use("/transactions", transactionRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

module.exports = app;
