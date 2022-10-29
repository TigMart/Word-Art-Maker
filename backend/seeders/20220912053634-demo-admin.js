'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        email:'admin@test.com',
        password: '$2b$10$zwADuJ8Jd6rQrG62xyoAmOG/l2E0M9DYoJCHUGqz4iOhvMit4uAmS',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
