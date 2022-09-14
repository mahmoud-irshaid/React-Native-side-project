"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      _id: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },

      assigneeName: {
        type: Sequelize.STRING,
      },
      claimed: {
        type: Sequelize.BOOLEAN,
      },
      priority: {
        type: Sequelize.STRING,
      },
      priorityImpact: {
        type: Sequelize.STRING,
      },
      severity: {
        type: Sequelize.STRING,
      },
      severityImpact: {
        type: Sequelize.STRING,
      },
      dueDate: {
        type: Sequelize.DATEONLY,
      },
      dueTime: {
        type: Sequelize.TIME,
      },
      estTime: {
        type: Sequelize.TIME,
      },
      tags: {
        type: Sequelize.STRING,
      },

      checked: {
        type: Sequelize.Boolean,
      },
      recordStatus: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UseTasks");
  },
};
