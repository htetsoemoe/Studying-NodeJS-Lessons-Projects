"use strict";

const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");

// set application configuration variables(key: value)
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs"); // set template engine

// middlewares
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use((req, resp, next) => {
    console.log(`Client request to : ${req.url}`);
    next();
});

// routers
app.get("/", homeController.rootController);
app.get("/name", homeController.nameController);

app.post("/", (req, resp) => {
    console.log(req.body);
    console.log(req.query);
    resp.send("POST Successful!");
});

app.listen(app.get("port"), () => {
    console.log(`The server is running on port : ${app.get("port")}`);
});
