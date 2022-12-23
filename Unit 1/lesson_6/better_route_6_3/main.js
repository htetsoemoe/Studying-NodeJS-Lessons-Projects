"use strict";

const port = 3000;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const fs = require("fs");
const router = require("./route");

const plainContentType = {
    "Content-Type": "text/plain"
}

const htmlContentType = {
    "Content-Type": "text/html"
}

// create custom read file
const customReadFile = (file, resp) => {
    fs.readFile(`./${file}`, (error, data) => {
        if (error) {
            console.log("Error Reading The File ...");
        }
        resp.end(data);
    });
};

// add request methods and callbacks to route object in route module
router.get("/", (req, resp) => {
    resp.writeHead(httpStatusCodes.OK, plainContentType);
    resp.end("INDEX");
});

router.get("/index.html", (req, resp) => {
    resp.writeHead(httpStatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", resp);
});

router.post("/", (req, resp) => {
    resp.writeHead(httpStatusCodes.OK, plainContentType);
    resp.end("POSTED");
});

// create server with router's handle function
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number : ${port}`);