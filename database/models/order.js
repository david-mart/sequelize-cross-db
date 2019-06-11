module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      tableName: "order",
      timestamps: false
    }
  );
