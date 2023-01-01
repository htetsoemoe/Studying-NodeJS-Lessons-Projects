"use strict";

const port = 3000;
const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");

// The express.json and express.urlencoded for parsing incoming data to the server.
// Other packages, such as body - parser, act as middleware and perform similar tasks

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use((req, resp, next) => {
    console.log(`Client request to ${req.url}`);
    next();
});

app.get("/", (req, resp) => {
    resp.send(`<h1>This is a home page.</h1>`);
});

// **** using :vegetable router funtion in Controller *****
app.get("/items/:vegetable", homeController.sendReqParam);

// POST : using curl commmand => curl --data "first_name=Ko&last_name=Htet" http://localhost:3000	
app.post("/", (req, resp) => {
    console.log(req.body);
    console.log(req.query);
    resp.send("POST Successful!");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});

