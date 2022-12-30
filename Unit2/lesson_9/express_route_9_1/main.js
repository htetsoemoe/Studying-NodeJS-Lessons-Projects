"use strict";

const port = 3000;
const express = require("express");
const app = express();

// Middelware : is excute before every requests of application
app.use((req, resp, next) => {
    console.log(`Working in Middleware, The request URL : ${req.url}`);
    next();
});

// using request parameter (:vegetable)
app.get("/items/:vegetable", (req, resp) => {
    let veg = req.params.vegetable;
    console.log(`GET Request for ${veg}`);
    resp.send(`<h1>This is the page for</h1> <h3>=====> &nbsp; ${veg}</h3>`);
});

app.get("/items/:fruit", (req, resp) => {
    let fruit = req.params.fruit;
    console.log(`GET Request for ${fruit}`);
    resp.send(`<h1>This is the page for</h1> <h3>=====> &nbsp; ${fruit}</h3>`);
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});