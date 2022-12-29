"use strict";

const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, resp) => {
    resp.send("Hello, Express Framework!");
})
.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port numbe : ${port}`);
});