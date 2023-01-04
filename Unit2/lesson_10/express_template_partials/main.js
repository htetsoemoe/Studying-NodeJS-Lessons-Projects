"use strict";

const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");// express import 'express-ejs-layouts'

// set application configuration variables
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// middlewares
app.use(layouts); // express use 'express-ejs-layouts' module

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use((req, resp, next) => {
    console.log(`Client request to ${req.url}`);
    next();
});

// routers
app.get("/", homeController.rootController);
app.get("/name/:name", homeController.nameController);

app.post("/", homeController.submitController);

app.listen(app.get("port"), () => {
    console.log(`The server is running on port : ${app.get("port")}`);
});