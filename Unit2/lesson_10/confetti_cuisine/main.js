"use strict";

// import modules
const express = require("express");
const app = express();

const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

const layout = require("express-ejs-layouts");

// configurations
app.set("view engine", "ejs");
app.set("port", process.env.PORT | 3000);

// middlewares
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(layout);
app.use(express.static("public"));

// routers
app.get("/", (req, resp) => {
    resp.render("index");
});
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// middlewares (Error Handler) 
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`The server is running on port : ${app.get("port")}`);
});
