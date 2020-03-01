'use strict';
const regencies = require('../data/regencies');
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('regencies', regencies)
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('regencies', null, {});
    }
};
