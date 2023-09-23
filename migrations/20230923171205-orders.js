"use strict";

/** @type {import('sequelize-cli').Migration} */
const tableName = "orders";
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      fullName: {
        type: Sequelize.STRING(100),
      },
      address: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.STRING(100),
      },
      phoneNumber: {
        type: Sequelize.STRING(20),
      },
      departureDate: {
        type: Sequelize.DATE,
      },
      uid: {
        type: Sequelize.STRING(100),
      },
      tour: {
        type: Sequelize.INTEGER,
        references: {
          model: "destinations",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(tableName);
  },
};
