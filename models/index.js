// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  // FIXME: 
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  // FIXME: CONFIRM DELETE ACTIONS
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // FIXME: 
  through: {
    model: ProductTag
  },
});

// FIXME: Triggering error - "product not defined"
//  Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
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
