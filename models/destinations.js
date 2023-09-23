"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class destinations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      destinations.belongsTo(models.regions, {
        as: "Region",
        foreignKey: "region",
      });
    }
  }
  destinations.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      link: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      paymentLink: DataTypes.STRING,
      region: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "destinations",
    }
  );
  return destinations;
};
