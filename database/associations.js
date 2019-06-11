const { UsersDb, ProductsDb } = require("./index");

UsersDb.models.user.hasMany(UsersDb.models.order, { foreignKey: "user_id" });

const execute = async () => {
  const user = await UsersDb.models.user.findOne();
  await user.createOrder({ order_date: new Date(2019, 4, 12) })
};

execute();