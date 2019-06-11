module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      order_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      tableName: "product",
      timestamps: false
    }
  );
