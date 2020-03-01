'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        fullname: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};