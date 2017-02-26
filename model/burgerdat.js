
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "event" model that matches up with DB
var Burger = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  date: {
    type: Sequelize.DATE
  },
  
   
});
console.log(Burger);
// Syncs with DB
Burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burger;
