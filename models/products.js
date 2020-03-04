'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    category_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description:DataTypes.TEXT
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};