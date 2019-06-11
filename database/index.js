const Sequelize = require("sequelize");
const config = require("../config");

const UsersDb = new Sequelize(config.usersDatabaseName, config.username, config.password, config.options);

const User = UsersDb.import("models/user.js");
const Order = UsersDb.import("models/order.js");

const ProductsDb = new Sequelize(config.productsDatabaseName, config.username, config.password, config.options);

const Product = ProductsDb.import("models/product.js");

module.exports = {
  UsersDb,
  ProductsDb
};
// sequelize.dialect.supports.schemas = true;
