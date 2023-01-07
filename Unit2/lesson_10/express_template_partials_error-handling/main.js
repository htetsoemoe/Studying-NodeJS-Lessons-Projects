"use strict";

const express = require("express");
const app = express();

// import modules
const homeController = require("./controllers/homeController");
const errorHandler = require("./controllers/errorController");// error handle module
const layouts = require("express-ejs-layouts");// express import 'express-ejs-layouts'

// set application configuration variables
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// middlewares

/**
 *  To enable the serving of static files, add app.use(express.static("public")) to
 *  main.js. This line of code tells your application to use the corresponding public folder, at
 *  the same level in the project directory as main.js, to serve static files.
 */
app.use(express.static("public"));
app.use(layouts); // express use 'express-ejs-layouts' module

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());
app.use(homeController.logRequestPaths);

// routers
app.get("/", homeController.rootController);
app.get("/name/:name", homeController.nameController);
app.post("/", homeController.submitController);

// error handle middlewares
app.use(errorHandler.logErrors);
app.use(errorHandler.respondNoResourceFound);
app.use(errorHandler.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`The server is running on port : ${app.get("port")}`);
});