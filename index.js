const { UsersDb, ProductsDb } = require("./database");
require("./database/associations");

ProductsDb.sync().then(() => {  
  // UsersDb.models.user.create({ name: 'Jon Snow' })
});
