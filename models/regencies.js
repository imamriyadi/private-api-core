'use strict';
module.exports = (sequelize, DataTypes) => {
  const regencies = sequelize.define('regencies', {
    province_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  regencies.associate = function(models) {
    // associations can be defined here
  };
  return regencies;
};