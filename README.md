# CRUD MERN Stack Book Publisher WebApp
 This is a MERN(React,Node,Express,MongoDb) stack web app for book publishers. The back end will use Node&Express with react for front-end

# Requirements
-Admin can add/create, Retrieve, updates, delete (CRUD)
- Books have id, title of book,author, description of Book,Published Status
-Search Feature
-Authentication for admin and new user

-View all books
-Add books, edit books if admin

# Design Pattern


# API Endpoints
GET   api/books  gets all books in db
GET   api/books
POST
PUT
DELETE
DELETE
GET      api/books


# Notes 
On the backend, you'll probably have installed Express for your Node runtime, Mongoose for a more convenient way to talk to your MongoDB, and on your frontend, React as your frontend framework, Redux for state management 
 -will have backend folder and frontend folder each with its own package.json
# Backend notes
-mkdir <folder name> --create folder
-npm init  -initialize node js app with package.json file, follow prompts and give details
-install modules express, mongoose, cors
npm install express mongoose body-parser cors --save
 cors notes https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy  cors prevents same-origin policy which is a critical security mechanism that restricts how a document or script loaded by one origin can interact with a resource from another origin.
 It helps isolate potentially malicious documents, reducing possible attack vectors. For example, it prevents a malicious website on the Internet from running JS in a browser to read data from a third-party webmail service (which the user is signed into) or a company intranet (which is protected from direct access by the attacker by not having a public IP address) and relaying that data to the attacker.

 ~~Server.js line 8-10 If you want to restrict AJAX access to a single origin, you can use the origin option:
 ~~Bodyparser helps parse for json
 ~~cors - to enable cors
-setup mongodb = npm install mongodb
--In your Express code you require the driver, connect to the database, and then perform create, read, update, and delete (CRUD) operations.
 # Configure MongoDB database
 -db.config.js give url to mongodb and index.js to use
 # Define Mongoose
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require("./books.model.js")(mongoose);

module.exports = db;
 
~~  THEN   ~~

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