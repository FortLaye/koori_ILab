'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Temoignages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomComplet: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      avatar: {
        allowNull: true,
        type: Sequelize.BLOB
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
    await  queryInterface.bulkInsert('Temoignages', [
        {
          nomComplet: 'Papa Saliou MBODJ',
          message: 'Toute personne, toute équipe ayant participé à un projet utilisant les méthodes de Koori en ressort transformée.',
          avatar: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      {
        nomComplet: 'El Hadji Birahim GUEYE',
        message: 'Ce livret est très utile, didactique et complet. Il va aider tous ceux qui cherchent un protocole pour trouver leur rêve.',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Temoignages');
  }
};
