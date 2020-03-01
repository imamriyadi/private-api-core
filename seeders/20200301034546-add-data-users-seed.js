'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'imam riyadi',
            email: 'imamriyadi32@gmail.com',
            gender: 0,
            phone_number: '05521515',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Admin',
            email: 'admin@admin.com',
            gender: 0,
            phone_number: '22262262',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users',null,{})
    }
};
