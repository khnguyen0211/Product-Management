const { Product } = require("../models");

// const Product = require("../models/index.js");

const checkProductList = async () => {
   const PList = await Product.findAll();
   if(PList) {return PList}
   else {return null}
}

const getDetailProduct = async (id) => {
    const detailProduct = await Product.findOne({
        where: {
            id: id,
        }
    })
    if(detailProduct) {
        return detailProduct;
    } else {
        return null;
    }
}


const insertProduct = async (bodyProduct) => {
    const newProduct = await Product.create(bodyProduct);
    return newProduct;
   
}

const updateProductService = async (id, bodyProduct) => {
    const productUpdate = await getDetailProduct(id);
    const {name, amount, price, sale} = bodyProduct;
    if(productUpdate) {
        productUpdate.name = name;
        productUpdate.amount = amount;
        productUpdate.price = price;
        productUpdate.sale = sale;
        const productUpdated = await productUpdate.save();
        return productUpdated;
    } else {
        return false;
    }
}

const deleteProductService = async (id) => {
    const findDeleteProduct = getDetailProduct(id);
    if(findDeleteProduct) {
        const deletedProduct = await Product.destroy({
            where: {
                id: id,
            }
        })
        return deletedProduct;
    } else {
        return null;
    }
    
}
module.exports = {checkProductList, 
    getDetailProduct, 
    insertProduct, 
    updateProductService,
    deleteProductService};
