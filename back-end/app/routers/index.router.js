const express = require("express");
const rootRouter = express.Router();
const productRouter = require("./product.router.js");

rootRouter.use("/products", productRouter);

module.exports = rootRouter;