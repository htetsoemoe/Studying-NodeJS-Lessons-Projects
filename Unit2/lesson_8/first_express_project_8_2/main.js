"use strict";

const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, resp) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);

    resp.send("Hello Express Framework with request informations!");
})
.listen(port, () => {
    console.log(`The server has started and is listening on port number : ${port}`);
});