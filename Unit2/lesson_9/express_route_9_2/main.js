"use strict";

const port = 3000;
const express = require("express");
const app = express();

// The express.json and express.urlencoded for parsing incoming data to the server.
// Other packages, such as body - parser, act as middleware and perform similar tasks
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use((req, resp, next) => {
    console.log(`Request to : ${req.url}`);
    next();
});

app.post("/", (req, resp) => {
    console.log(req.body);
    console.log(req.query);
    resp.send("POST successful!");
});

app.get("/", (req, resp) => {
    resp.send("This is the home page.");
})

app.get("/items/:vegetable", (req, resp) => {
    var veg = req.params.vegetable;
    resp.send(`<h1>This is the page for <span>${veg}</span></h1>`)
});

app.listen(port, () => {
    console.log(`The server is running on port : ${port}`);
});