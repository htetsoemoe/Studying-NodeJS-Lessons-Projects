"use strict";

// import modules
const express = require("express");
const app = express();

const layout = require("express-ejs-layouts");

const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

// MongoDB
const MongoDB = require("mongodb").MongoClient;
const dbURL = "mongodb://localhost:27017";
const dbName = "recipe_db";

MongoDB.connect(dbURL, (error, client) => {
    if (error) {
        throw error;
    };

    let db = client.db(dbName);
    db.collection("contacts").insert(
        {
            name: "Ko Htet",
            email: "kohtet@gmail.com",
            address: "Mandalay"
        },
        (error, db) => {
            if(error) {
                throw error;
            };
            console.log(db);
        }
    );

    db.collection("contacts")
        .find()
        .toArray((error, data) => {
            if (error) {
                throw error;
            };
            console.log(data);
        });
});

// Configurations
app.set("view engine", "ejs");
app.set("port", process.env.PORT | 3000);

// Middlewares
app.use(express.urlencoded(
    {
        extended: false
    }
));
app.use(express.json());
app.use(layout);
app.use(express.static("public"));

// Routers
app.get("/", (req, resp) => {
    resp.render("index");
});

app.get("/courses", homeController.showCourse);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// Middlewares
app.use(errorController.logErrors);
app.use(errorController.resourceNotFound);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port : http://localhost:${app.get("port")}`);
})