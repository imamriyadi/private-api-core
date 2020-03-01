'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('user', [{
            fullname: 'Admin',
            username: 'admin',
            email: 'admin@admin.com',
            password: "21232f297a57a5a743894a0e4a801fc3",
            createdAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user', null, {});
    }
};
