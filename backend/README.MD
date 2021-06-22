# Structure

# Notes
 # Define Mongoose
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require("./books.model.js")(mongoose);

module.exports = db;
 then 
 Call connect() method in server.js
 const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  # Steps
  1. add configuration for MongoDB database & Mongoose.
  2. create a Mongoose Model, 
  3. write a controller and define routes for handling all CRUD operations.