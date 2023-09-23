"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.hasOne(models.destinations, {
        as: "Destination",
        foreignKey: "tour",
      });
    }
  }
  orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING(100),
      },
      address: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.STRING(100),
      },
      phoneNumber: {
        type: DataTypes.STRING(20),
      },
      departureDate: {
        type: DataTypes.DATE,
      },
      uid: {
        type: DataTypes.STRING(100),
      },
      tour: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return orders;
};
