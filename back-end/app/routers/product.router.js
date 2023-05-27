const express = require("express");
const productRouter = express.Router();
productRouter.use(express.json());

const { getAllList,
    getDetailById,
    insertNewProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller.js");
const { checkEmpty, checkValueNumber } = require("../middlewares/validation.middleware.js");

//get full-list
productRouter.get("/", getAllList)

//get detail product by id
productRouter.get("/:id", getDetailById,)

//insert product 
productRouter.post("/", checkEmpty, checkValueNumber ,insertNewProduct)

//update product
productRouter.put("/:id", updateProduct)

//delete product
productRouter.delete("/:id", deleteProduct)

module.exports = productRouter;