const { DataTypes } = require("sequelize");

const createProduct = (sequelize) => {
    return sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sale: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
      tableName: "products",
      timestamps: false,  
    })
}

module.exports = {createProduct};