'use strict';
module.exports = (sequelize, DataTypes) => {
  const provices = sequelize.define('provices', {
    name: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  provices.associate = function(models) {
    // associations can be defined here
  };
  return provices;
};