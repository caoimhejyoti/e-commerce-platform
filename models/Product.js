// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      // FIXME: add validation - should confirm it is a decimal
      validate:{
        isDecimal: true
      }
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      // FIXME: add defalut value - 10
      defaultValue: 10, 
      //FIXME: add validation - should confirm it is a numeric value
      validate: {
        isNumeric: true
      }
    },
    category_id:{
      type: DataTypes.INTEGER,
      //FIXME: add reference to category model id. 
      references:{ 
        model: Category,
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
  }
);

module.exports = Product;
