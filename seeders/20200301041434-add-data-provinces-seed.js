'use strict';
const province = require('../data/provinsi');
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('provices', province)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('provices', null, {})
    }
};
