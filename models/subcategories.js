'use strict';
module.exports = (sequelize, DataTypes) => {
  const subCategories = sequelize.define('subCategories', {
    category_id: DataTypes.INTEGER,
    sub_category_name: DataTypes.STRING
  }, {});
  subCategories.associate = function(models) {
    // associations can be defined here
  };
  return subCategories;
};