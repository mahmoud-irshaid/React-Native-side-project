"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      _id: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      assigneeName: DataTypes.STRING,
      claimed: DataTypes.BOOLEAN,
      priority: DataTypes.STRING,
      priorityImpact: DataTypes.STRING,
      severity: DataTypes.STRING,
      severityImpact: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      dueTime: DataTypes.TIME,
      estTime: DataTypes.TIME,
      tags: DataTypes.STRING,
      checked: DataTypes.BOOLEAN,
      recordStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tasks",
      timestamps: false,
    }
  );
  return Users;
};
