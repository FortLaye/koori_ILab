'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProfilId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Profils',
          key: 'id'
        }
      },
      nomComplet: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.STRING
      },
      departement: {
        type: Sequelize.STRING
      },
      direction: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.BLOB,
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await  queryInterface.bulkInsert('Users', [{
      ProfilId: 1,
      nomComplet: 'Papa Saliou',
      email: 'mainashou@gmail.com',
      profession: 'Developpeur web',
      service: 'Systeme information',
      departement: 'Innovation Lab',
      direction: 'Direction Systeme information',
      avatar: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      ProfilId: 2,
      nomComplet: 'fatou',
      email: 'mainashou@gmail.com',
      profession: 'Developpeuse web',
      service: 'Systeme information',
      departement: 'Innovation Lab',
      direction: 'Direction Systeme information',
      avatar: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      ProfilId: 2,
      nomComplet: 'Maimouna',
      email: 'mainashou@gmail.com',
      profession: 'Developpeuse web',
      service: 'Systeme information',
      departement: 'Innovation Lab',
      direction: 'Direction Systeme information',
      avatar: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
