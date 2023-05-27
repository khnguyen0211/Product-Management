const {Sequelize} = require("sequelize");
const {HOST, USER, PASSWORD, DB, dialect} = require("../configs/db.config.js");
const {createProduct} = require("./product.model.js");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect
});

const Product = createProduct(sequelize);


module.exports = {
    sequelize,
    Product
}

