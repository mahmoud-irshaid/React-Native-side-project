"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *     */

    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          id: 0,
          _id: "1f",
          name: "task 1",
          description: "desc",
          type: "instant",
          assigneeName: "me",
          claimed: false,
          priority: "low",
          priorityImpact: "any",
          severity: "low",
          severityImpact: "any",
          dueDate: "12-2-2222",
          dueTime: "13:00",
          estTime: "15:00",
          tags: "#tagg",
          checked: false,
          recordStatus: "latest",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
