// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');

// Products belongsTo Category
Product.belongsTo(Category,{
  // FIXME: 
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  // FIXME: CONFIRM DELETE ACTIONS
  foreignKey: 'category_id',
  onDelete: '',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // FIXME: 
  through: {
    model: ProductTag
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  // FIXME: 
  through: {
    model: ProductTag
  },
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag, 
};
