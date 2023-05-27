const { checkProductList,
    getDetailProduct,
    insertProduct,
    updateProductService,
    deleteProductService } = require("../services/product.service");


let productList = [
    {
        id: 1,
        name: "Iphone 01",
        amount: 10,
        price: 1000,
        sale: 0.1
    },
    {
        id: 2,
        name: "Samsung 02",
        amount: 20,
        price: 700,
        sale: 0.2
    },
    {
        id: 3,
        name: "Laptop 03",
        amount: 30,
        price: 3500,
        sale: 0.35
    }
]

const getAllList = async (req, res) => {
    const productList = await checkProductList()
    if (productList) {
        res.send(productList);
    } else {
        res.send("Not found");
    }
}

const getDetailById = async (req, res) => {
    const { id } = req.params;
    const detailProduct = await getDetailProduct(id);
    if (detailProduct) {
        res.send(detailProduct);
    } else {
        res.send("Not found");
    }
}

const insertNewProduct = async (req, res) => {
    let bodyProduct = req.body;
    const newProduct = await insertProduct(bodyProduct)
    res.send(newProduct);
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const bodyProduct = req.body;
    const updatedProduct = await updateProductService(id, bodyProduct);
    if (updatedProduct) {
        res.send("Succeed");
    } else {
        res.send("Failed");
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await deleteProductService(id);
    if (deletedProduct) {
        res.send("Succeed");
    } else {
        res.send("Failed");
    }
}

module.exports = {
    getAllList,
    getDetailById,
    insertNewProduct,
    updateProduct,
    deleteProduct
}